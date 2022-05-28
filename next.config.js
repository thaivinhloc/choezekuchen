/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");

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
  images: {
    domains: ["choezekuchen-4525c--choezekuchen-mu780vyt.web.app/"],
  },
  // i18n,
  images: {
    domains: ["choezekuchen.herokuapp.com"],
  },
};

module.exports = { ...WithLess, ...nextConfig };
