import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: { projectId: process.env.SANITY_STUDIO_PROJECT_ID, dataset: "development" },
  deployment: { appId: process.env.SANITY_STUDIO_APP_ID, autoUpdates: true },
});
