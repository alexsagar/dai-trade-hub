import LegalPage from "@/components/LegalPage";
import { getUsedPhotos } from "@/lib/cms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/image-credits",
  title: "Image Credits",
  description: "Sources and licences for photographs used on the DAI Trade Hub website.",
  noindex: true,
});

export default async function ImageCreditsPage() {
  const photos = await getUsedPhotos();
  return (
    <LegalPage title="Image Credits" updated="November 2026" draft={false}>
      <p>
        Photographs on this website are used under the licences below. They illustrate product categories and regions
        and do not depict DAI Trade Hub facilities, suppliers or partners. Images may be resized and recompressed for
        the web.
      </p>
      <ul>
        {photos.map((p) => (
          <li key={p.src}>
            {p.sourceUrl ? (
              <a href={p.sourceUrl} className="underline" rel="noopener noreferrer">{p.alt}</a>
            ) : (
              p.alt
            )}
            {p.credit ? ` by ${p.credit}` : ""}
            {p.licence ? `, licensed ${p.licence}` : ""}.
          </li>
        ))}
      </ul>
    </LegalPage>
  );
}
