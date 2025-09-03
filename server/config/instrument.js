// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://f03ed8c0b19adac6ea7b2dd4b39f01ad@o4509955744595968.ingest.us.sentry.io/4509955746758656",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  integrations: [Sentry.mongoIntegration()],
  sendDefaultPii: true,
});
