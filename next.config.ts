import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
  trailingSlash: true,
};

export default nextConfig;
