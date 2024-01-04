/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfigmodule.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3.amazonaws.com',
          port: '',
          pathname: '/my-bucket/**',
        },
      ],
    },
  }
