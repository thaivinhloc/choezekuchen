import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";
import { GURUS } from "common/navigator";

export default function Gurus({ allLangsData }: any) {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === GURUS) {
      router.push("/" + i18next.language.substring(0, 2) + GURUS);
    }
  }, []);

  return null;
}
