import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";
import { HOME, RETREAT } from "common/navigator";
// import { getSortedLangsData } from "../lib/lang";

export default function Home({ allLangsData }: any) {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === HOME) {
      router.push("/" + i18next.language.substring(0, 2) + RETREAT);
    }
  }, []);

  return null;
}

// export async function getStaticProps() {
//   const allLangsData = getSortedLangsData();
//   return {
//     props: {
//       allLangsData,
//     },
//   };
// }
