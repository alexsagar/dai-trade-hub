import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { getSiteSettings } from "@/lib/cms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/terms",
  title: "Terms & Conditions",
  description: "Terms for using the DAI Trade Hub website.",
  noindex: true,
});

export default async function TermsPage() {
  const COMPANY = await getSiteSettings({ stega: false });
  return (
    <LegalPage title="Terms & Conditions" updated="November 2026">
      <p>By using this website you agree to the terms below.</p>

      <h2>Website information</h2>
      <p>
        Content on this website describes the business areas and opportunities {COMPANY.name} works on. Product
        categories are sourcing opportunities and do not represent confirmed stock, pricing, certifications or supply
        capacity. Any commercial terms apply only when agreed in writing between the parties.
      </p>

      <h2>Acceptable use</h2>
      <p>Please use the website and inquiry form only for genuine business purposes and in accordance with applicable law.</p>

      <h2>Intellectual property</h2>
      <p>
        The DAI Trade Hub name and logo belong to {COMPANY.name}. Photographs are used under their respective licences,
        listed on the <Link href="/image-credits" className="underline">Image Credits</Link> page.
      </p>

      <h2>Liability</h2>
      <p>
        We aim to keep the website accurate and available but do not guarantee that it is complete, current or
        uninterrupted.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of Nepal.</p>
    </LegalPage>
  );
}
