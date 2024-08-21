/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? '/<NextJS-Clock-App>/' : '',
    images: {
      unoptimized: true, // Since GitHub Pages doesn't support image optimization
    },
  };
  
  const isProd = process.env.NODE_ENV === 'production';
  
  module.exports = nextConfig;  

export default nextConfig;
