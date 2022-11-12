import { ELanguages } from "i18n/config"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export default async function withTrans({
  locale
}: {
  locale: ELanguages
}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "content",
        "retreat",
        "history",
        "login"
      ]))
    }
  }
}
