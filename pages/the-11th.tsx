import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";
import { THE11TH } from "common/navigator";

export default function The11th({ allLangsData }: any) {
  const router = useRouter();
  useEffect(() => {
    const { pathname } = router;
    if (pathname === THE11TH) {
      router.push("/" + i18next.language.substring(0, 2) + THE11TH);
    }
  }, []);

  return null;
}
