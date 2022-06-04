import PhowaPractice from "components/PhowaPractice"
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";
import { FC } from "react";

const PhowaPracticePage: FC<{}> = () => {
    /* Render */
    return <PhowaPractice />;
}

export async function getStaticPaths() {
    const paths = getAllLanguageSlugs();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const language = getLanguage(params.lang);
    return {
        props: {
            language,
        },
    };
}

export default PhowaPracticePage;

