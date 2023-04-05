/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "wembleypark.com",
      "cdn-ph-org.worldtattoogallery.com",
    ],
  },
};

module.exports = nextConfig;
