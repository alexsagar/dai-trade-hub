import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { CMS_TAG } from "@/lib/cms";

// Called by a Sanity GROQ webhook on publish/unpublish/delete. The signature is
// verified with SANITY_REVALIDATE_SECRET; unsigned or mis-signed calls are rejected.
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ error: "Revalidation is not configured." }, { status: 503 });

  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(req, secret, true);
    if (!isValidSignature) return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
    // Expire immediately so the next visitor gets the published change.
    revalidateTag(CMS_TAG, { expire: 0 });
    return NextResponse.json({ revalidated: true, type: body?._type ?? null });
  } catch (err) {
    console.error("Revalidate webhook failed", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }
}
