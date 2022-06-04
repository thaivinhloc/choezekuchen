import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";
import { THEPERFECTWAY } from "common/navigator";

export default function Theperfectway({ allLangsData }: any) {
  const router = useRouter();

  // localhost/THEPERFECTWAY -> localhost/vi/THEPERFECTWAY
  useEffect(() => {
    const { pathname } = router;
    if (pathname === THEPERFECTWAY) {
      router.push("/" + i18next.language.substring(0, 2) + THEPERFECTWAY);
    }
  }, []);

  return null;
}
