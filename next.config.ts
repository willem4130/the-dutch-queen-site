import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images and add timeout configurations
  images: {
    domains: ['images.unsplash.com'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Add timeout for image loading
    loader: 'default',
    minimumCacheTTL: 60,
  },
  
  // Server timeout configurations
  experimental: {
    // Reduce server timeout for faster error responses
    serverMinification: true,
  },
  
  // Turbopack configuration (moved from experimental.turbo)
  turbopack: {
    resolveExtensions: [
      '.mdx',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.mjs',
      '.json',
    ],
  },
  
  // Add headers for better resource loading
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Resource hints for faster loading
          {
            key: 'Link',
            value: '</fonts.googleapis.com>; rel=preconnect; crossorigin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
