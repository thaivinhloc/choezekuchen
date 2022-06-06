import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";
import { HISTORY } from "common/navigator";

export default function History({ allLangsData }: any) {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === HISTORY) {
      router.push("/" + i18next.language.substring(0, 2) + HISTORY);
    }
  }, []);

  return null;
}
