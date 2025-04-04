import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Disable Next.js Image Optimization for static export
  images: {
    unoptimized: true,
  },
  // Add other configuration options as needed
};

export default nextConfig;
