import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";
import { LOGIN } from "common/navigator";

export default function Login({ allLangsData }: any) {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === LOGIN) {
      router.push("/" + i18next.language.substring(0, 2) + LOGIN);
    }
  }, []);

  return null;
}
