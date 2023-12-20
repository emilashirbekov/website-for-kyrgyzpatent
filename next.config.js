/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();
const nextConfig = {
  images: {
    domains: ["knews.kg", "flowbite.s3.amazonaws.com"],
  },
};

module.exports = withNextIntl(nextConfig);
