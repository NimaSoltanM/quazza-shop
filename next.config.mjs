/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'dkstatics-public.digikala.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
