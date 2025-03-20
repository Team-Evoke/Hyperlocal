import type { NextConfig } from 'next';
import webpack from 'webpack';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          "postcss": false,
        },
      };
    }
    return config;
  },
};

export default nextConfig;