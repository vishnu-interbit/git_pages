/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: { domains: ["localhost", "towingminneapolis.us"] },
};

module.exports = nextConfig;
