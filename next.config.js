/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");
const { i18n } = require("./next-i18next.config");

const WithLess = withLess({
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  },
});
const nextConfig = {
  reactStrictMode: true,
  // i18n,
  images: {
    domains: ["choezekuchen.herokuapp.com"],
  },
};

module.exports = { ...WithLess, ...nextConfig };
