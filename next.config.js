const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'GiveawayAvalancheBuild',
  output: 'standalone',
  assetPrefix: isProd ? 'https://cdn.bluelineentertainment.net/GiveawayAvalanche/' : undefined,
  poweredByHeader: false,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/discord/:path*',
          destination: 'https://discord.com/api/v9/:path*',
        },
      ],
    }
  },
};

module.exports = nextConfig;