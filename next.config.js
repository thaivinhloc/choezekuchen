/** @type {import('next').NextConfig} */
const withLess = require("next-with-less")
const { i18n } = require("./next-i18next.config")
const withFonts = require("next-fonts")
const WithLess = withFonts(
  withLess({
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true
    },
    env: {
      REACT_APP_API_URL: process.env.REACT_APP_API_URL,
      MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
      SUPPORT_LANG: process.env.SUPPORT_LANG
    }
  })
)
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "choezekuchen.herokuapp.com",
      "*.amazonaws.com",
      "s3.ap-southeast-1.amazonaws.com"
    ]
  },
  i18n
}

module.exports = { ...WithLess, ...nextConfig }
