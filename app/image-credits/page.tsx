import LegalPage from "@/components/LegalPage";
import { IMAGE_CREDITS } from "@/lib/credits";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/image-credits",
  title: "Image Credits",
  description: "Sources and licences for photographs used on the DAI Trade Hub website.",
  noindex: true,
});

export default function ImageCreditsPage() {
  return (
    <LegalPage title="Image Credits" updated="November 2026" draft={false}>
      <p>
        Photographs on this website are third-party works used under the licences below. They illustrate product
        categories and regions and do not depict DAI Trade Hub facilities, suppliers or partners. Images were resized
        and recompressed for the web.
      </p>
      <ul>
        {IMAGE_CREDITS.map((c) => (
          <li key={c.file}>
            <a href={c.source} className="underline" rel="noopener noreferrer">{c.title}</a> by {c.author}, licensed{" "}
            <a href={c.licenseUrl} className="underline" rel="noopener noreferrer license">{c.license}</a>.
          </li>
        ))}
      </ul>
    </LegalPage>
  );
}
