import { Divider, Modal } from "antd"
import ListPage from "container/ListPage"
import SideCategory from "container/SideCategory"
import { useApp } from "context/app/AppContext"
import { EMediaType, ListItem, TListPage } from "definition"
import { getMediaType } from "helper"
import { ELanguages } from "i18n/config"
import Head from "next/head"
import React, { useEffect, useState } from "react"
import { getPrayerPage } from "services/prayers"

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
  const { setTitleBanner } = useApp()

  useEffect(() => {
    if (attributes.title) {
      setTitleBanner(attributes.title)
    }
  }, [])

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

  console.log({ mediaList })

  return (
    <>
      <Head>
        {attributes.title && <title>{attributes.title}</title>}
        {attributes.description && (
          <meta name='description' content={attributes.description} />
        )}
      </Head>
      <ListPage
        category={
          <SideCategory>
            <div
              style={{
                color: "#303030",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: 16,
                fontSize: 18
              }}
            >
              Categories
            </div>
            {mediaTypes.map(({ name, type }) => {
              const items = getLengthByType(type)
              return items > 0 ? (
                <div style={{ padding: "8px 0" }}>
                  <a type='button' onClick={() => setMediaType(type)}>
                    {name} ({getLengthByType(type)})
                  </a>
                </div>
              ) : (
                <></>
              )
            })}
          </SideCategory>
        }
        {...attributes}
        dataList={mediaList}
        meta={meta}
      />
    </>
  )
}

export async function getStaticProps({ locale }: { locale: ELanguages }) {
  try {
    const prayerPage = await getPrayerPage({ locale })
    if (!prayerPage?.data) {
      throw Error("Data Not Found")
    }

    console.log({ prayerPage })

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
