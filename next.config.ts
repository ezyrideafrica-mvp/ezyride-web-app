import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from your local public folder AND external sources like Unsplash
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
