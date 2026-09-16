import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
};

export default nextConfig;

// Enable Cloudflare bindings (R2, etc.) during `next dev` via OpenNext.
// Guarded so a missing/incompatible adapter can never break the standard build.
if (process.env.NODE_ENV === "development") {
  import("@opennextjs/cloudflare")
    .then(({ initOpenNextCloudflareForDev }) => initOpenNextCloudflareForDev())
    .catch(() => {});
}
