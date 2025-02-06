import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'],
    minimumCacheTTL: 60,
  },
  webpack(config) {
    config.resolve.extensions.push('.mjs');
    return config;
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/studio',
        destination: 'http://localhost:3333', // Sanity Studio ki URL
      },
    ];
  },
};

export default nextConfig;
