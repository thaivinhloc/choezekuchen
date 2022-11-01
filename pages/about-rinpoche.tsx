import React, { useEffect } from "react"
import About from "components/AboutRinpoche"
import { ELanguages } from "i18n/config"
import { getAboutPage } from "services/about"
import { TListPage } from "definition"
import { useApp } from "context/app/AppContext"
const AboutRinpoche = (pageProps: TListPage) => {
  const { setTitleBanner, setBanner } = useApp()
  const { attributes } = pageProps
  useEffect(() => {
    if (attributes.title) {
      setTitleBanner(attributes.title)
    }
  }, [attributes.title])

  useEffect(() => {
    if (attributes.banner) {
      setBanner(attributes.banner.data)
    }
  }, [attributes.banner])

  return <About {...pageProps} />
}
export async function getStaticProps({ locale }: { locale: ELanguages }) {
  try {
    const aboutPage = await getAboutPage({ locale })
    if (!aboutPage?.data) {
      throw Error("Data Not Found")
    }

    return {
      props: {
        ...aboutPage.data,
        attributes: {
          ...aboutPage.data.attributes,
          ...(aboutPage.data.attributes.data ?? {})
        }
      },
      revalidate: 10
    }
  } catch (error) {
    return {
      props: {
        attributes: {
          dataList: []
        }
      },
      revalidate: 10
    }
  }
}

export default AboutRinpoche
