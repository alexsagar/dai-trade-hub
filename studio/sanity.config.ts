import { defineConfig, type WorkspaceOptions } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { visionTool } from "@sanity/vision";
import { schemaTypes, SINGLETONS } from "./schemaTypes";
import { structure } from "./structure";
import { resolve } from "./presentation";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "";
// The website deployment the Presentation tool previews (a Vercel preview URL for development content).
const previewUrl = process.env.SANITY_STUDIO_PREVIEW_URL || "http://localhost:3000";

function workspace(dataset: "development" | "production", title: string): WorkspaceOptions {
  return {
    name: dataset,
    basePath: `/${dataset}`,
    title,
    projectId,
    dataset,
    schema: {
      types: schemaTypes,
      // Singletons cannot be created from the "new document" menu.
      templates: (templates) => templates.filter((t) => !SINGLETONS.includes(t.schemaType)),
    },
    document: {
      // Singletons cannot be duplicated or deleted.
      actions: (actions, ctx) =>
        SINGLETONS.includes(ctx.schemaType)
          ? actions.filter((a) => a.action && ["publish", "discardChanges", "restore", "unpublish"].includes(a.action))
          : actions,
    },
    plugins: [
      structureTool({ structure }),
      presentationTool({ resolve, previewUrl: { initial: previewUrl, previewMode: { enable: "/api/draft-mode/enable" } } }),
      // Query explorer for developers only.
      ...(dataset === "development" ? [visionTool()] : []),
    ],
  };
}

export default defineConfig([
  workspace("production", "DAI Trade Hub — Live website"),
  workspace("development", "DAI Trade Hub — Testing"),
]);
