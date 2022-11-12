import React, { useEffect } from "react"
import { Row, Col, Image } from "antd"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { ELanguages } from "i18n/config"
import { useTranslation } from "react-i18next"
import { getEventPage, getEvents } from "services/event"
import {
  EListType,
  TEvent,
  TPageConfigurationAttributes,
  TPagination,
  TRecordResponse
} from "definition"
import { Media } from "elements/Media"
import { Container } from "react-bootstrap"
import { RichText } from "elements/RichText"
import { useApp } from "context/app/AppContext"
import { transformEventToListItem } from "helper"
import ListLayout from "container/ListLayout"

type EventsPageProps = {
  data: TRecordResponse<TEvent>[]
  meta: {
    pagination: TPagination
  }
}

export default function Events({
  data,
  meta,
  configuration
}: {
  configuration: TPageConfigurationAttributes
} & EventsPageProps) {
  const { setTitleBanner, setBanner } = useApp()
  const { title, banner, background, action_title } = configuration
  const dataList = data.map(({ id, attributes }) =>
    transformEventToListItem({ ...attributes, id })
  )

  useEffect(() => {
    if (title) {
      setTitleBanner(title)
    }
    if (banner) {
      setBanner(banner.data)
    }
  }, [])

  return (
    <div
      className='events'
      style={{ padding: "48px 0", background: background ?? "transparent" }}
    >
      <Container>
        <ListLayout
          action_title={action_title}
          listItemStyle={{
            background: "#fff",
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16
          }}
          listType={EListType.BLOG}
          dataList={dataList}
          mediaProps={{
            width: 600,
            height: 400,
            ratio: "3/2"
          }}
        />
      </Container>
    </div>
  )
}
export async function getStaticProps({ locale }: { locale: ELanguages }) {
  try {
    const { data, meta } = await getEvents({ locale })
    const pageRes = await getEventPage({ locale })
    console.log({ pageRes });
    
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          "common",
          "footer",
          "header",
          "login",
          "content"
        ])),
        configuration: pageRes?.data?.attributes || {},
        data,
        meta
      },
      revalidate: 10
    }
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          "common",
          "footer",
          "header",
          "login",
          "content"
        ])),
        configuration: {},
        data: [],
        meta: {
          pagination: {}
        }
      },
      revalidate: 10
    }
  }
}
