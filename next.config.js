/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.ff-ues.com'],
  },
}

module.exports = nextConfig
