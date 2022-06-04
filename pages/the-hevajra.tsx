import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";
import { THEHEVAJRA } from "common/navigator";

export default function Thehevajra({ allLangsData }: any) {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === THEHEVAJRA) {
      router.push("/" + i18next.language.substring(0, 2) + THEHEVAJRA);
    }
  }, []);

  return null;
}
