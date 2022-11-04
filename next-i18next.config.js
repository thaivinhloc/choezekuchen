const path = require("path")

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi"],
    localeDetection: true
  },
  localePath: path.resolve("./locales"),
  saveMissing: true,
  saveMissingTo: "common",
  keySeparator: false
}
