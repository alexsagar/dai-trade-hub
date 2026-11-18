"use client";

import { useIsPresentationTool } from "next-sanity/hooks";

// Shown when someone views draft content outside the Studio's Presentation tool,
// so a preview session is never mistaken for the live site.
export default function DraftModeBanner() {
  const inStudio = useIsPresentationTool();
  if (inStudio !== false) return null;
  return (
    <div role="status" className="fixed inset-x-0 bottom-0 z-[60] flex items-center justify-center gap-4 bg-gold px-4 py-3 text-sm font-semibold text-ink">
      Previewing unpublished content.
      <a href="/api/draft-mode/disable" className="underline">Exit preview</a>
    </div>
  );
}
