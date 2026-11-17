// Seeds a Sanity dataset with the approved website content and photography.
//
//   node --env-file=.env.local scripts/seed-sanity.ts                 # development dataset, overwrite seeded docs
//   node --env-file=.env.local scripts/seed-sanity.ts --keep-existing # only create documents that do not exist yet
//
// Requires NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN (Editor token, never committed).
// Writing to production additionally needs: --dataset=production --confirm-production
import { readFileSync } from "node:fs";
import { basename, join } from "node:path";
import { createClient } from "@sanity/client";
import { localPhotos, seedDocuments } from "../lib/cms/seed.ts";

const args = new Set(process.argv.slice(2));
const dataset = [...args].find((a) => a.startsWith("--dataset="))?.split("=")[1] ?? "development";
const keepExisting = args.has("--keep-existing");
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN (e.g. in .env.local).");
  process.exit(1);
}
if (dataset === "production" && !args.has("--confirm-production")) {
  console.error("Refusing to write to production without --confirm-production.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2026-02-01", useCdn: false });

// Sanity de-duplicates identical uploads, so re-running reuses the same asset ids.
const assetIds: Record<string, string> = {};
for (const photo of localPhotos()) {
  const file = readFileSync(join(process.cwd(), "public", photo.src));
  const asset = await client.assets.upload("image", file, {
    filename: basename(photo.src),
    title: photo.alt,
    creditLine: [photo.credit, photo.licence].filter(Boolean).join(", "),
    source: photo.sourceUrl ? { name: "Wikimedia Commons", url: photo.sourceUrl, id: photo.sourceUrl } : undefined,
  });
  assetIds[photo.src] = asset._id;
  console.log(`image  ${photo.src} -> ${asset._id}`);
}

const tx = client.transaction();
for (const doc of seedDocuments(assetIds)) (keepExisting ? tx.createIfNotExists(doc) : tx.createOrReplace(doc));
const res = await tx.commit({ visibility: "async" });
console.log(`${keepExisting ? "Created missing" : "Wrote"} ${res.results.length} documents in "${dataset}".`);
