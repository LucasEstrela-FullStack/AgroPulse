import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  reactStrictMode: true,
  typedRoutes: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts"]
  }
};

export default nextConfig;
