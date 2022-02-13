/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com'],
    deviceSizes: [], // specify all possible image sizes manually
    imageSizes: [256, 384, 413].flatMap((px) => [px, px * 2, px * 3]),
  },
}

