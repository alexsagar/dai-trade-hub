import { createClient } from "next-sanity";
import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { dataset, projectId } from "@/lib/cms";

const token = process.env.SANITY_API_READ_TOKEN;

// Sanity's Presentation tool calls this with a short-lived secret that is validated
// against the dataset using the viewer token; draft mode is only enabled when it matches.
const handler =
  projectId && token
    ? defineEnableDraftMode({ client: createClient({ projectId, dataset, apiVersion: "2026-02-01", useCdn: false, token }) })
    : null;

export async function GET(request: Request) {
  if (!handler) return new Response("Preview is not configured.", { status: 404 });
  return handler.GET(request);
}
