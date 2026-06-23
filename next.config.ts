import type { NextConfig } from "next";

const isExport = process.env.NEXT_BUILD_TARGET === "export";

const nextConfig: NextConfig = {
  output: isExport ? "export" : undefined,
  images: {
    unoptimized: isExport,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
  // For static export at /website-1/ (GitHub Pages repo subpath)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
