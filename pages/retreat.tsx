import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";
import { RETREAT } from "common/navigator";

export default function Retreat({ allLangsData }: any) {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === RETREAT) {
      router.push("/" + i18next.language.substring(0, 2) + RETREAT);
    }
  }, []);

  return null;
}
