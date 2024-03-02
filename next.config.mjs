import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: 'dkstatics-public.digikala.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
};

const millionConfig = {
  auto: { rsc: true }, // if you're using RSC: auto: { rsc: true },
};

export default million.next(nextConfig, millionConfig);
