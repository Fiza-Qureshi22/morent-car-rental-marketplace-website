/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,  // Enable strict mode for better error handling in React

  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,

    // Clerk Authentication Variables
    NEXT_PUBLIC_CLERK_FRONTEND_API: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API,
    CLERK_API_KEY: process.env.CLERK_API_KEY,
    CLERK_JWT_KEY: process.env.CLERK_JWT_KEY,
  },

  images: {
    domains: ['cdn.sanity.io', 'images.clerk.dev'], // Clerk ki images ke liye domain add karna zaroori hai
  },

  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
};
