import { test } from "node:test";
import assert from "node:assert/strict";
import { validateInquiry, escapeHtml } from "./inquiry.ts";

const valid = {
  name: "Jane Buyer",
  country: "Germany",
  email: "jane@example.com",
  inquiryType: "Product Sourcing",
  message: "Looking for Nepal-origin orthodox tea samples.",
  consent: true,
};

test("accepts a complete inquiry", () => {
  assert.equal(validateInquiry(valid).ok, true);
});

test("rejects missing consent, bad email and unknown type", () => {
  const r = validateInquiry({ ...valid, consent: false, email: "nope", inquiryType: "Spam" });
  assert.equal(r.ok, false);
  if (!r.ok) assert.deepEqual(Object.keys(r.errors).sort(), ["consent", "email", "inquiryType"]);
});

test("strips line breaks from single-line fields", () => {
  const r = validateInquiry({ ...valid, name: "Jane\r\nBcc: evil@example.com" });
  assert.ok(r.ok && !r.data.name.includes("\n"));
});

test("enforces length limits", () => {
  assert.equal(validateInquiry({ ...valid, message: "x".repeat(5001) }).ok, false);
});

test("escapes HTML", () => {
  assert.equal(escapeHtml(`<script>"&'`), "&lt;script&gt;&quot;&amp;&#39;");
});
