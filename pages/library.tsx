import { Radio } from "antd"
import ListLayout from "container/ListLayout"
import { useApp } from "context/app/AppContext"
import { EMediaType, ListItem, TListPage } from "definition"
import { TopCategoryWrapper } from "elements/styled/TopCategory"
import { getMediaType } from "helper"
import withGlobalData from "hoc/withGlobalData"
import withLibrary from "hoc/withLibrary"
import { withNavigator } from "hoc/withNavigator"
import withTrans from "hoc/withTrans"
import Head from "next/head"
import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next"

const mediaTypes = [
  {
    type: EMediaType.FILE,
    name: "Sadhana"
  },
  {
    type: EMediaType.AUDIO,
    name: "Audio"
  },
  {
    type: EMediaType.VIDEO,
    name: "Video"
  }
]

function PrayersPage({ id, attributes }: TListPage) {
  const { t } = useTranslation("common")
  const [mediaType, setMediaType] = useState(EMediaType.FILE)
  const [mediaList, setMediaList] = useState<ListItem[]>([])
  const { setTitleBanner, setBanner } = useApp()

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

  useEffect(() => {
    const _mediaList = attributes.dataList.filter(({ media }) => {
      const { type } = getMediaType(media.data)
      return type === mediaType
    })
    setMediaList([..._mediaList])
  }, [mediaType, id])

  const getLengthByType = (type: EMediaType) => {
    return attributes.dataList.filter(
      ({ media }) => getMediaType(media.data).type === type
    ).length
  }

  return (
    <>
      <Head>
        {attributes.title && <title>{attributes.title}</title>}
        {attributes.description && (
          <meta name='description' content={attributes.description} />
        )}
      </Head>
      <div style={{ background: attributes.background ?? "transparent" }}>
        <Container>
          <TopCategoryWrapper>
            <Radio.Group
              defaultValue={EMediaType.FILE}
              size='large'
              buttonStyle='solid'
              onChange={(e) => setMediaType(e.target.value)}
            >
              {mediaTypes.map(({ name, type }) => {
                const items = getLengthByType(type)
                return (
                  <Radio.Button key={`${type}-${name}`} value={type}>
                    {t(name)} ({items})
                  </Radio.Button>
                )
              })}
            </Radio.Group>
          </TopCategoryWrapper>
        </Container>
        <ListLayout
          {...attributes}
          dataList={mediaList}
          previewable
          downloadable
          mediaProps={{
            style: {
              backgroundColor: "#fff",
              padding: 10,
              border: "1px solid #DFE2E7",
              marginBottom: 2
            }
          }}
        />
      </div>
    </>
  )
}

export const getServerSideProps = withGlobalData(withLibrary(withTrans))

export default withNavigator(PrayersPage)
