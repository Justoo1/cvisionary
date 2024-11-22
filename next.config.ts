import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t2rmw5hia0aj5m3m.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
