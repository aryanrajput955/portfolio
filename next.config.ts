import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

if (process.env.NODE_ENV !== 'production') {
   (nextConfig as any).turbopack = {
      rules: {
        "*.{jsx,tsx}": {
          loaders: [LOADER]
        }
      }
    };
}

export default nextConfig;
// Orchids restart: 1769848277285
