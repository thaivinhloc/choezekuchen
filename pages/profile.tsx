import { PROFILE } from "common/navigator";
import i18next from "i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProfilePage({ allLangsData }: any) {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === PROFILE) {
      router.push("/" + i18next.language.substring(0, 2) + PROFILE);
    }
  }, []);

  return null;
}
