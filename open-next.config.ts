import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// OpenNext adapter config for deploying this Next.js app to Cloudflare Workers.
// Defaults are sufficient for a mostly-static portfolio. Add an incremental
// cache override here later if server-rendered data grows.
export default defineCloudflareConfig();
