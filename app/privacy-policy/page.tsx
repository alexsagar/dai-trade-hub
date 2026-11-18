import LegalPage from "@/components/LegalPage";
import { getSiteSettings } from "@/lib/cms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/privacy-policy",
  title: "Privacy Policy",
  description: "How DAI Trade Hub handles information submitted through its website inquiry form.",
  noindex: true,
});

export default async function PrivacyPolicyPage() {
  const COMPANY = await getSiteSettings({ stega: false });
  return (
    <LegalPage title="Privacy Policy" updated="November 2026">
      <p>
        This page explains how {COMPANY.name} (&quot;DAI Trade Hub&quot;, &quot;we&quot;) handles information you share
        through this website.
      </p>

      <h2>Information we collect</h2>
      <p>We only collect information you choose to submit through the inquiry form:</p>
      <ul>
        <li>Full name, company name and country</li>
        <li>Email address and, optionally, phone number</li>
        <li>Inquiry type, product or service interest, estimated order quantity and your message</li>
      </ul>
      <p>
        To protect the form from abuse, our hosting infrastructure processes your IP address temporarily to limit
        repeated submissions. The website does not use advertising or analytics cookies.
      </p>

      <h2>How we use it</h2>
      <p>
        Your submission is delivered by email to our team so that we can review and respond to your inquiry. We do not
        sell your information or use it for unrelated marketing.
      </p>

      <h2>Service providers</h2>
      <p>
        The website is hosted on Vercel, and inquiries are delivered through an email service provider. These providers
        process data on our behalf to operate the website and deliver messages.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to access, correct or delete the information you have sent us by emailing{" "}
        <a href={`mailto:${COMPANY.email}`} className="underline">{COMPANY.email}</a>.
      </p>

      <h2>Contact</h2>
      <p>
        {COMPANY.name}, {COMPANY.street}, {COMPANY.city} {COMPANY.postalCode}, {COMPANY.country}.
        <br />
        Email: <a href={`mailto:${COMPANY.email}`} className="underline">{COMPANY.email}</a>
      </p>
    </LegalPage>
  );
}
