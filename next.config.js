/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/src/pages/main-window',
        permanent: true,
      },
    ]
  },
}
