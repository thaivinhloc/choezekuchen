import { Divider, Modal, Radio } from "antd"
import ListPage from "container/ListPage"
import SideCategory from "container/SideCategory"
import { useApp } from "context/app/AppContext"
import { EMediaType, ListItem, TListPage } from "definition"
import { TopCategoryWrapper } from "elements/styled/TopCategory"
import { getMediaType } from "helper"
import { ELanguages } from "i18n/config"
import Head from "next/head"
import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { getPrayerPage } from "services/prayers"
import styled from "styled-components"

const mediaTypes = [
  {
    type: EMediaType.FILE,
    name: "File"
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

export default function PrayersPage({ id, attributes, meta }: TListPage) {
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

  console.log({ attributes })

  return (
    <>
      <Head>
        {attributes.title && <title>{attributes.title}</title>}
        {attributes.description && (
          <meta name='description' content={attributes.description} />
        )}
      </Head>
      <div>
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
                    {name} ({items})
                  </Radio.Button>
                )
              })}
            </Radio.Group>
          </TopCategoryWrapper>
        </Container>
        <ListPage {...attributes} dataList={mediaList} meta={meta} />
      </div>
    </>
  )
}

export async function getStaticProps({ locale }: { locale: ELanguages }) {
  try {
    const prayerPage = await getPrayerPage({ locale })
    if (!prayerPage?.data) {
      throw Error("Data Not Found")
    }

    return {
      props: {
        ...prayerPage.data
      }
    }
  } catch (error) {
    return {
      props: {
        attributes: {
          dataList: []
        }
      }
    }
  }
}
