import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";
import { HOME, SIGNUP } from "common/navigator";

export default function SingUp({ allLangsData }: any) {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === SIGNUP) {
      router.push(HOME + i18next.language.substring(0, 2) + SIGNUP);
    }
  }, []);

  return null;
}
