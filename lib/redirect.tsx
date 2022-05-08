/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useRouter } from "next/router";
import LanguageDetector from "i18next-browser-languagedetector";

export const useRedirect = (to?: string) => {
  const router = useRouter();
  to = to || router.asPath;

  const languageDetector = new LanguageDetector();
  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (to && to.startsWith("/" + detectedLng) && router.route === "/404") {
      // prevent endless loop
      router.replace("/" + detectedLng + router.route);
      return;
    }

    languageDetector.cacheUserLanguage((detectedLng as string) || "en");
    router.replace("/" + detectedLng + to);
  });

  return <></>;
};

export const Redirect = () => {
  useRedirect();
  return <></>;
};

export const getRedirect = (to: string) => {
  useRedirect(to);
  return <></>;
};
