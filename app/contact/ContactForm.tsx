"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { INQUIRY_TYPES } from "@/lib/inquiry";
import { COMPANY } from "@/lib/site";

type Errors = Record<string, string>;
type Status = { state: "idle" | "sending" } | { state: "sent" } | { state: "error"; message: string };

const field =
  "mt-1.5 w-full rounded-sm border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/70 focus:border-ink focus:outline-none aria-[invalid=true]:border-red-700";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<Errors>({});
  const [inquiryType, setInquiryType] = useState("");
  const [interest, setInterest] = useState("");
  const startedAt = useRef(0);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
    // Pre-fill from links such as /contact?type=Product%20Sourcing&interest=Herbs%20%26%20Spices
    const q = new URLSearchParams(window.location.search);
    const type = q.get("type");
    if (type && (INQUIRY_TYPES as readonly string[]).includes(type)) setInquiryType(type);
    setInterest(q.get("interest")?.slice(0, 200) ?? "");
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ state: "sending" });
    setErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, consent: data.consent === "on", startedAt: startedAt.current }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        form.reset();
        setInquiryType("");
        setInterest("");
        setStatus({ state: "sent" });
      } else {
        if (json.fields) setErrors(json.fields);
        setStatus({ state: "error", message: json.error || "Your inquiry could not be sent." });
      }
    } catch {
      setStatus({ state: "error", message: "Network error — your inquiry was not sent." });
    }
    requestAnimationFrame(() => resultRef.current?.focus());
  }

  if (status.state === "sent") {
    return (
      <div ref={resultRef} tabIndex={-1} role="status" className="rounded-sm border border-line bg-cream p-8 sm:p-10">
        <CheckCircle2 className="h-10 w-10 text-gold-deep" aria-hidden />
        <h2 className="mt-4 text-2xl">Inquiry sent</h2>
        <p className="mt-3 leading-relaxed">
          Thank you for contacting DAI Trade Hub. Your inquiry has been received. Our team will review your message and
          respond as soon as possible.
        </p>
        <button type="button" className="btn-outline mt-8" onClick={() => setStatus({ state: "idle" })}>
          Send another inquiry
        </button>
      </div>
    );
  }

  const err = (name: string) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-1.5 text-sm text-red-700">{errors[name]}</p>
    ) : null;
  const aria = (name: string) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });
  const sending = status.state === "sending";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6" aria-describedby="form-note">
      <p id="form-note" className="text-sm text-muted">Fields marked * are required.</p>

      {/* Honeypot: hidden from people and assistive tech, filled only by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-ink">Full Name *</label>
          <input id="name" name="name" required maxLength={100} autoComplete="name" className={field} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-semibold text-ink">Company Name</label>
          <input id="company" name="company" maxLength={150} autoComplete="organization" className={field} {...aria("company")} />
          {err("company")}
        </div>
        <div>
          <label htmlFor="country" className="text-sm font-semibold text-ink">Country *</label>
          <input id="country" name="country" required maxLength={80} autoComplete="country-name" className={field} {...aria("country")} />
          {err("country")}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-ink">Email Address *</label>
          <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" className={field} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-ink">Phone Number</label>
          <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className={field} {...aria("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="inquiryType" className="text-sm font-semibold text-ink">Inquiry Type *</label>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value)}
            className={field}
            {...aria("inquiryType")}
          >
            <option value="" disabled>Select an inquiry type</option>
            {INQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {err("inquiryType")}
        </div>
        <div>
          <label htmlFor="interest" className="text-sm font-semibold text-ink">Product or Service Interest</label>
          <input
            id="interest"
            name="interest"
            maxLength={200}
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className={field}
            {...aria("interest")}
          />
          {err("interest")}
        </div>
        <div>
          <label htmlFor="quantity" className="text-sm font-semibold text-ink">
            Estimated Order Quantity <span className="font-normal text-muted">(optional)</span>
          </label>
          <input id="quantity" name="quantity" maxLength={100} className={field} {...aria("quantity")} />
          {err("quantity")}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-ink">Message *</label>
        <textarea id="message" name="message" required rows={6} maxLength={5000} className={field} {...aria("message")} />
        {err("message")}
      </div>

      <div>
        <label className="flex gap-3 text-sm leading-relaxed">
          <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-ink" {...aria("consent")} />
          <span>
            I agree that DAI Trade Hub may use the details I provide to respond to this inquiry, as described in the{" "}
            <Link href="/privacy-policy" className="underline hover:text-gold-deep">Privacy Policy</Link>. *
          </span>
        </label>
        {err("consent")}
      </div>

      <div ref={resultRef} tabIndex={-1} aria-live="polite" className="focus:outline-none">
        {status.state === "error" && (
          <div role="alert" className="flex gap-3 rounded-sm border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            <AlertCircle className="h-5 w-5 shrink-0" aria-hidden />
            <p>
              {status.message} You can also email{" "}
              <a href={`mailto:${COMPANY.email}`} className="font-semibold underline">{COMPANY.email}</a>.
            </p>
          </div>
        )}
      </div>

      <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
        {sending && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        {sending ? "Sending…" : "Send Business Inquiry"}
      </button>
    </form>
  );
}
