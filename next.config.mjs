/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // New way to configure static exports
  assetPrefix: isProd ? '/NextJS-Clock-App/' : '',
  images: {
    unoptimized: true, // Since GitHub Pages doesn't support image optimization
  },
};

export default nextConfig;
