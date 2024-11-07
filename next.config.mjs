/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true
  },
  images: {
    minimumCacheTTL: 31536000
  }
};

export default nextConfig;
