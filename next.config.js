/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
      resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    });

    return config;
  },
};

module.exports = nextConfig
