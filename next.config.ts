import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  webpack(config) {
    // Add .mjs extension to module resolution
    config.resolve.extensions.push('.mjs');
    return config;
  },
};

export default nextConfig;
