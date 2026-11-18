import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: { projectId: process.env.SANITY_STUDIO_PROJECT_ID, dataset: "development" },
  // Hosted at https://dai-trade-hub.sanity.studio (used on the first deploy, before an app id exists).
  studioHost: "dai-trade-hub",
  deployment: { appId: process.env.SANITY_STUDIO_APP_ID || "w601dytzt59xh6nrkq80xm0w", autoUpdates: true },
});
