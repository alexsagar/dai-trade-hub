import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and Conditions of Use for DAI Trade Hub.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 mx-auto max-w-4xl px-6 lg:px-10">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-forest-dark mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      <h1 className="font-heading text-4xl text-charcoal mb-6">Terms of Service</h1>
      <p className="text-sm text-muted mb-10">Last Updated: June 2026</p>

      <div className="prose prose-forest max-w-none text-muted leading-relaxed space-y-6">
        <p>
          Welcome to DAI Trade Hub. By accessing or using our website, you agree to be bound by these Terms of Service. Please read them carefully.
        </p>
        
        <h2 className="text-2xl font-heading text-charcoal mt-8 mb-4">1. Use of Our Website</h2>
        <p>
          You may use our website solely for legitimate informational and business purposes. You agree not to use the site for any unlawful purpose, to solicit others to perform unlawful acts, or to violate any local, national, or international regulations.
        </p>

        <h2 className="text-2xl font-heading text-charcoal mt-8 mb-4">2. Intellectual Property Rights</h2>
        <p>
          All content, design elements, logos, and materials on this website are the intellectual property of DAI Trade Hub or its licensors. You may not reproduce, distribute, or modify any content without explicit written consent.
        </p>

        <h2 className="text-2xl font-heading text-charcoal mt-8 mb-4">3. Accuracy of Information</h2>
        <p>
          While we strive to provide accurate and up-to-date information regarding our agricultural products, logistics, and services, we do not warrant that all content is entirely error-free, complete, or current. We reserve the right to modify site content at any time.
        </p>

        <h2 className="text-2xl font-heading text-charcoal mt-8 mb-4">4. Limitation of Liability</h2>
        <p>
          DAI Trade Hub shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, our website. This includes damages to your computer equipment or other property resulting from viruses or malicious code.
        </p>

        <h2 className="text-2xl font-heading text-charcoal mt-8 mb-4">5. Governing Law</h2>
        <p>
          These Terms of Service are governed by and construed in accordance with the laws of Nepal. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Kathmandu, Nepal.
        </p>
      </div>
    </div>
  );
}
