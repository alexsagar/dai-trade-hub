import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy and Data Collection Practices for DAI Trade Hub.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 mx-auto max-w-4xl px-6 lg:px-10">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-forest-dark mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      <h1 className="font-heading text-4xl text-charcoal mb-6">Privacy Policy</h1>
      <p className="text-sm text-muted mb-10">Last Updated: June 2026</p>

      <div className="prose prose-forest max-w-none text-muted leading-relaxed space-y-6">
        <p>
          DAI Trade Hub ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by DAI Trade Hub when you visit our website.
        </p>
        
        <h2 className="text-2xl font-heading text-charcoal mt-8 mb-4">1. Information We Collect</h2>
        <p>
          We only collect information that you voluntarily provide to us when you fill out forms on our website (such as our Contact Form). This includes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Any messages or inquiries you submit</li>
        </ul>

        <h2 className="text-2xl font-heading text-charcoal mt-8 mb-4">2. How We Use Your Information</h2>
        <p>
          We use the information we collect primarily to communicate with you and provide the services or information you have requested. We may use your information to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Respond to your inquiries and support requests</li>
          <li>Send administrative information and business updates</li>
          <li>Improve our website functionality and user experience</li>
          <li>Protect against spam, abuse, and malicious activity (via CAPTCHA and Honeypot mechanisms)</li>
        </ul>

        <h2 className="text-2xl font-heading text-charcoal mt-8 mb-4">3. Cookies and Tracking</h2>
        <p>
          Our website uses essential cookies necessary for site functionality and security (such as CAPTCHA validation). We do not currently use invasive third-party tracking cookies for targeted advertising.
        </p>

        <h2 className="text-2xl font-heading text-charcoal mt-8 mb-4">4. Data Sharing and Security</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless we provide you with advance notice or are required by law. We implement appropriate technical security measures to protect your personal data against unauthorized access.
        </p>

        <h2 className="text-2xl font-heading text-charcoal mt-8 mb-4">5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at: <br />
          <strong>Email:</strong> info@daitradehub.com <br />
          <strong>Address:</strong> Panchakanya Marga, Kathmandu 44600, Nepal
        </p>
      </div>
    </div>
  );
}
