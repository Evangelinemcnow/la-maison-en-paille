const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.wixstatic.com' },
      { protocol: 'https', hostname: 'www.lamaisonenpaille.com' },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/andré-de-bouter',
        destination: '/andre-de-bouter',
      },
      {
        source: '/andr%C3%A9-de-bouter',
        destination: '/andre-de-bouter',
      },
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['mysql2', 'argon2'],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
}

module.exports = nextConfig
