import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  languages,
  defaultLanguage,
  namespaces,
  defaultNamespace,
} from "./config";

const locales = Object.assign(
  {},
  ...Object.keys(languages).map((index: string) => {
    const language = languages[Number(index)];
    return {
      [language]: Object.assign(
        {},
        ...Object.keys(namespaces).map((index: string) => {
          const namespace = namespaces[Number(index)];
          return {
            [namespace]: require("../locales/" +
              language +
              "/" +
              namespace +
              ".json"),
          };
        })
      ),
    };
  })
);

const detection = {
  // Order and from where user language should be detected
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "sessionStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain",
  ],

  // Keys or params to lookup language from
  lookupCookie: "lng",
  lookupLocalStorage: "lng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // Cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // Optional set cookie options, reference: MDN Set-Cookie docs, https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
  cookieOptions: { path: "/", sameSite: "strict" },
};

i18next.use(LanguageDetector).init({
  detection: {
    // Order and from where user language should be detected
    order: [
      "querystring",
      "cookie",
      "localStorage",
      "sessionStorage",
      "navigator",
      "htmlTag",
      "path",
      "subdomain",
    ],

    // Keys or params to lookup language from
    lookupCookie: "lng",
    lookupLocalStorage: "lng",
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // Cache user language on
    caches: ["localStorage", "cookie"],
    excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

    // Optional set cookie options, reference: MDN Set-Cookie docs, https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
    cookieOptions: { path: "/", sameSite: "strict" },
  },
  fallbackLng: defaultLanguage,
  resources: locales,
  ns: namespaces,
  defaultNS: defaultNamespace,
  returnObjects: true,
  debug: false,
  whitelist: ["en", "vi"],
  interpolation: {
    escapeValue: false, // Not needed for React
  },
});

export default i18next;
