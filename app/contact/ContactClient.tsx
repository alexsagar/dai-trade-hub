"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { Reveal } from "@/components/Animations";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["Panchakanya Marga, Kathmandu 44600"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["01-5107439"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@dainepal.com", "trade@dainepal.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Sunday – Friday: 9:00 AM – 6:00 PM", "Saturday: Closed"],
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Honeypot check
    if (formData.get("bot-field")) {
      return; // Silently reject bots
    }
    
    setLoading(true);
    setError("");

    try {
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        company: formData.get("subject"), // Storing subject in the 'company' field for the email
        message: formData.get("message"),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      e.currentTarget.reset();
    } catch (err) {
      setError("An error occurred. Please verify your connection or try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-forest-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/about-company.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-5">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Contact</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-heading text-[2.75rem] md:text-[3.25rem] text-white leading-[1.1] mb-4">
              Get in Touch
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-white/60 max-w-xl">
              We&apos;d love to hear from you. Reach out for inquiries, partnerships,
              or any questions about our services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <Reveal>
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-forest mb-4">
                  Contact Information
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-heading text-[1.75rem] text-charcoal mb-8">
                  Let&apos;s Start a Conversation
                </h2>
              </Reveal>

              <div className="space-y-7">
                {contactInfo.map((item, i) => (
                  <Reveal key={item.title} delay={0.1 + i * 0.05}>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded bg-surface flex items-center justify-center text-forest flex-shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-charcoal mb-1">
                          {item.title}
                        </h4>
                        {item.lines.map((line) => (
                          <p key={line} className="text-sm text-muted leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Map */}
              <Reveal delay={0.35} className="mt-10">
                <div className="rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4792.34989468102!2d85.3596361!3d27.711927699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b9078c172df%3A0x14b345e3cf6a4c58!2sDAI%20(Da%20Investment%20Pvt.%20Ltd.)!5e1!3m2!1sen!2snp!4v1780477977305!5m2!1sen!2snp"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DAI Trade Hub Office Location"
                  />
                </div>
              </Reveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="bg-surface rounded-lg p-8 lg:p-12">
                  <h3 className="font-heading text-2xl text-charcoal mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-sm text-muted mb-8">
                    Fill out the form below and our team will get back to you within
                    24 business hours.
                  </p>

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <CheckCircle className="w-12 h-12 text-forest mb-4" />
                      <h4 className="font-heading text-xl text-charcoal mb-2">
                        Message Sent Successfully
                      </h4>
                      <p className="text-sm text-muted">
                        Thank you for reaching out. We&apos;ll be in touch shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-name" className="block text-sm font-medium text-dark mb-2">
                            Full Name *
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            placeholder="Your full name"
                            className="w-full px-4 py-3 text-sm bg-white border border-border rounded focus:outline-none focus:border-forest transition-colors placeholder:text-subtle"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block text-sm font-medium text-dark mb-2">
                            Email Address *
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@company.com"
                            className="w-full px-4 py-3 text-sm bg-white border border-border rounded focus:outline-none focus:border-forest transition-colors placeholder:text-subtle"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-phone" className="block text-sm font-medium text-dark mb-2">
                            Phone Number
                          </label>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            placeholder="+977-XXXXXXXXXX"
                            className="w-full px-4 py-3 text-sm bg-white border border-border rounded focus:outline-none focus:border-forest transition-colors placeholder:text-subtle"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-subject" className="block text-sm font-medium text-dark mb-2">
                            Subject *
                          </label>
                          <select
                            id="contact-subject"
                            name="subject"
                            required
                            className="w-full px-4 py-3 text-sm bg-white border border-border rounded focus:outline-none focus:border-forest transition-colors text-dark"
                          >
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="partnership">Business Partnership</option>
                            <option value="services">Service Inquiry</option>
                            <option value="careers">Career Opportunities</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Honeypot Field (Hidden) */}
                      <input
                        type="text"
                        name="bot-field"
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div>
                        <label htmlFor="contact-message" className="block text-sm font-medium text-dark mb-2">
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell us how we can help..."
                          className="w-full px-4 py-3 text-sm bg-white border border-border rounded focus:outline-none focus:border-forest transition-colors resize-y placeholder:text-subtle"
                        />
                      </div>

                      {/* CAPTCHA Placeholder */}
                      <div className="bg-white/50 border border-dashed border-border rounded p-4 flex items-center justify-center h-16 mb-4">
                        <span className="text-sm text-muted">Cloudflare Turnstile / reCAPTCHA placeholder</span>
                      </div>

                      <div className="flex items-start gap-2 text-sm text-muted mb-4">
                        <input type="checkbox" id="consent" required className="mt-1" />
                        <label htmlFor="consent">
                          I agree to the <Link href="/privacy-policy" className="text-forest hover:underline">Privacy Policy</Link> and consent to my data being processed.
                        </label>
                      </div>

                      {error && (
                        <div className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-2 bg-forest text-white px-8 py-3.5 text-[13.5px] font-semibold tracking-wide rounded hover:bg-forest-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? "Sending..." : "Send Message"}
                        {!loading && <Send className="w-4 h-4" />}
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
