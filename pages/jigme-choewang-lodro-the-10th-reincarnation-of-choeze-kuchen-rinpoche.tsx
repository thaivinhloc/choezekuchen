import { useRouter } from "next/router";
import { useEffect } from "react";
import { JIGMECHOEWANGLODRO } from "common/navigator"
import i18next from "i18next";


export default function JigmeChoewangLodro({ allLangsData }: any) {
    const router = useRouter();

    useEffect(() => {
        const { pathname } = router;
        if (pathname === JIGMECHOEWANGLODRO) {
            router.push("/" + i18next.language.substring(0, 2) + JIGMECHOEWANGLODRO)
        }
    }, []);

    return null;
}