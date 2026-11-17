import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { COMPANY } from "@/lib/site";
import { validateInquiry, escapeHtml, TRADE_TYPES } from "@/lib/inquiry";

const MIN_FILL_MS = 3000; // forms submitted faster than this are almost certainly bots
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

// ponytail: per-instance memory limiter; resets on cold start and is not shared across instances.
// Upgrade to Vercel Firewall rate limiting or a shared store if abuse appears.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const fail = (status: number, error: string, extra?: object) => NextResponse.json({ error, ...extra }, { status });

export async function POST(req: Request) {
  if (!req.headers.get("content-type")?.includes("application/json")) return fail(415, "Unsupported request format.");

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return fail(429, "Too many inquiries from this connection. Please try again later.");

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return fail(400, "Invalid request.");
  }

  // Spam traps: hidden honeypot field and minimum time on page. Nothing is sent when tripped.
  const startedAt = Number(body.startedAt);
  if (body.website || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return fail(400, "We could not verify this submission. Please wait a moment and try again.");
  }

  const result = validateInquiry(body);
  if (!result.ok) return fail(422, "Please correct the highlighted fields.", { fields: result.errors });
  const d = result.data;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, SMTP_FROM_EMAIL, CONTACT_TO_EMAIL, TRADE_TO_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP is not configured");
    return fail(503, "Our online form is temporarily unavailable, so your inquiry was not sent.");
  }

  const to = TRADE_TYPES.includes(d.inquiryType)
    ? TRADE_TO_EMAIL || COMPANY.tradeEmail
    : CONTACT_TO_EMAIL || COMPANY.email;

  const rows: [string, string][] = [
    ["Name", d.name],
    ["Company", d.company || "—"],
    ["Country", d.country],
    ["Email", d.email],
    ["Phone", d.phone || "—"],
    ["Inquiry type", d.inquiryType],
    ["Product / service interest", d.interest || "—"],
    ["Estimated order quantity", d.quantity || "—"],
  ];

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: SMTP_SECURE === "true",
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transporter.sendMail({
      from: SMTP_FROM_EMAIL || SMTP_USER,
      to,
      replyTo: d.email,
      subject: `Website inquiry: ${d.inquiryType} — ${d.name}`.slice(0, 180),
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage:\n${d.message}\n\nConsent to be contacted: yes`,
      html: `<h2>New website inquiry</h2><table>${rows
        .map(([k, v]) => `<tr><th align="left">${k}</th><td>${escapeHtml(v)}</td></tr>`)
        .join("")}</table><h3>Message</h3><p>${escapeHtml(d.message).replace(/\n/g, "<br>")}</p><p><em>Consent to be contacted: yes</em></p>`,
    });
  } catch (err) {
    console.error("Contact form: send failed", err instanceof Error ? err.message : err);
    return fail(502, "Your inquiry could not be sent. Please try again.");
  }

  return NextResponse.json({ ok: true });
}
