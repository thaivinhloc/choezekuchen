import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";
import { MOTIVATION } from "common/navigator";

export default function Motivation({ allLangsData }: any) {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === MOTIVATION) {
      router.push("/" + i18next.language.substring(0, 2) + MOTIVATION);
    }
  }, []);

  return null;
}
