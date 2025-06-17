import type { NextConfig } from "next";

const repo = process.env.BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: repo,
  assetPrefix: `${repo}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
