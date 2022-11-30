/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    path: '/_next/image',
    loader: 'default',
  },
}

module.exports = nextConfig
