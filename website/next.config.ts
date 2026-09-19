import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Vinext beta.5 cannot prerender '/' with basePath set. This single-page
  // export uses anchor navigation; assetPrefix handles its hosted assets.
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
