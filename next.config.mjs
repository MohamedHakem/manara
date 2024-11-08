/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    minimumCacheTTL: 31536000
  }
};

export default nextConfig;
