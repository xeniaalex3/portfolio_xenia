import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    ppr: true,
    dynamicIO: true,
  }
};

export default nextConfig;
