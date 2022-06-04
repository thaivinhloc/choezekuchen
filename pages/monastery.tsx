import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";
import { MONASTERY } from "common/navigator";

export default function Monastery({ allLangsData }: any) {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === MONASTERY) {
      router.push("/" + i18next.language.substring(0, 2) + MONASTERY);
    }
  }, []);

  return null;
}
