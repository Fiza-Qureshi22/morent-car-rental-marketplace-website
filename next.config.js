module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Remove or update the turbo configuration
  experimental: {
    // turbo: {}  // Use empty object if needed, but better to remove entirely
  }
};