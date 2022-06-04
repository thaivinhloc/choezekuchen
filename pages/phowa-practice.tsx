import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";
import { PHOWA_PRACTICE } from "common/navigator";

export default function PhowaPractice({ allLangsData }: any) {
    const router = useRouter();

    useEffect(() => {
        const { pathname } = router;
        if (pathname === PHOWA_PRACTICE) {
            router.push("/" + i18next.language.substring(0, 2) + PHOWA_PRACTICE);
        }
    }, []);

    return null;
}
