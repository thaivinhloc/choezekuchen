import JigmeChoewangLodro from "components/JigmeChoewangLodro"
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";
import { FC } from "react";

const JigmeChoewangLodroPage: FC<{}> = () => {
    /* Render */
    return <JigmeChoewangLodro />;
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

export default JigmeChoewangLodroPage;

