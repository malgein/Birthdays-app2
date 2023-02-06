/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images:{
    domains: ['cnnespanol.cnn.com', 'a.espncdn.com'] 
  },
  reactStrictMode: true,
}

module.exports = nextConfig
