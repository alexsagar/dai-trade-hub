export const INQUIRY_TYPES = [
  "Import Inquiry",
  "Export Inquiry",
  "Product Sourcing",
  "Retail Branding / Private Label",
  "Distribution Partnership",
  "Investment / Strategic Partnership",
  "General Inquiry",
] as const;

// Inquiry types routed to the trade inbox; everything else goes to the general inbox.
export const TRADE_TYPES: readonly string[] = ["Import Inquiry", "Export Inquiry", "Product Sourcing", "Distribution Partnership"];

const LIMITS = {
  name: 100,
  company: 150,
  country: 80,
  email: 254,
  phone: 40,
  interest: 200,
  quantity: 100,
  message: 5000,
} as const;

export type Inquiry = {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  inquiryType: string;
  interest: string;
  quantity: string;
  message: string;
};

export type ValidationResult = { ok: true; data: Inquiry } | { ok: false; errors: Partial<Record<keyof Inquiry | "consent", string>> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-.\s\d]{6,}$/;

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
// Single-line fields must not carry line breaks (prevents header/subject injection).
const line = (v: unknown) => str(v).replace(/[\r\n\t]+/g, " ");

export function validateInquiry(input: Record<string, unknown>): ValidationResult {
  const data: Inquiry = {
    name: line(input.name),
    company: line(input.company),
    country: line(input.country),
    email: line(input.email),
    phone: line(input.phone),
    inquiryType: line(input.inquiryType),
    interest: line(input.interest),
    quantity: line(input.quantity),
    message: str(input.message),
  };
  const errors: Partial<Record<keyof Inquiry | "consent", string>> = {};

  if (!data.name) errors.name = "Please enter your full name.";
  if (!data.country) errors.country = "Please enter your country.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.phone && !PHONE_RE.test(data.phone)) errors.phone = "Please enter a valid phone number.";
  if (!(INQUIRY_TYPES as readonly string[]).includes(data.inquiryType)) errors.inquiryType = "Please select an inquiry type.";
  if (data.message.length < 10) errors.message = "Please describe your inquiry (at least 10 characters).";
  if (input.consent !== true && input.consent !== "on" && input.consent !== "true")
    errors.consent = "Please confirm that we may use your details to respond to your inquiry.";

  for (const [key, max] of Object.entries(LIMITS) as [keyof typeof LIMITS, number][]) {
    if (data[key].length > max) errors[key] = `Please keep this under ${max} characters.`;
  }

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}

export function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}
