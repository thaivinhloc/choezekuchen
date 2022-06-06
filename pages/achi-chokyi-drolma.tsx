import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";
import { ACHI } from "common/navigator";

export default function Achi({ allLangsData }: any) {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === ACHI) {
      router.push("/" + i18next.language.substring(0, 2) + ACHI);
    }
  }, []);

  return null;
}
