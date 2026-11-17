/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production";
// The hosted Studio frames the site for Visual Editing; nothing else may frame it.
const studioOrigin = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL ? new URL(process.env.NEXT_PUBLIC_SANITY_STUDIO_URL).origin : "";
const frameAncestors = [studioOrigin, isDev && "http://localhost:3333"].filter(Boolean).join(" ") || "'none'";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data: https://cdn.sanity.io",
  "font-src 'self'",
  "connect-src 'self' https://*.api.sanity.io wss://*.api.sanity.io",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  `frame-ancestors ${frameAncestors}`,
  "upgrade-insecure-requests",
].join("; ");

const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" }],
  },
  async redirects() {
    // Legacy agricultural-era URLs.
    return [
      { source: "/gallery", destination: "/", permanent: true },
      { source: "/services/:slug", destination: "/services", permanent: true },
      { source: "/resources/:path*", destination: "/about", permanent: true },
      { source: "/partnership-opportunities", destination: "/partnerships", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        ],
      },
    ];
  },
};

export default nextConfig;
