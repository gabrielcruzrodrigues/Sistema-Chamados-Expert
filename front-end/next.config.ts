import type { NextConfig } from "next";
import "dotenv/config";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
  },
};

export default nextConfig;
