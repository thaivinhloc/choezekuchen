import { Col, Row } from "antd"
import { SinglePageContentWrapper } from "container/layout/SinglePage"
import { useApp } from "context/app/AppContext"
import { TEvent } from "definition"
import { GridMedia } from "elements/Media"
import { RichText } from "elements/RichText"
import withDetectDevice from "hoc/withDetectDevice"
import withEvent from "hoc/withEvent"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withTrans from "hoc/withTrans"
import { useEffect } from "react"
import styled from "styled-components"

type TEventDetails = {
  eventDetails: {
    data: {
      id: number
      attributes: TEvent
    }
  }
  isMobile: boolean
}

const PageContentWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 80px;
`

const EventDetails = ({ eventDetails, isMobile }: TEventDetails) => {
  console.log({ eventDetails, isMobile })
  const { setTitleBanner, setBanner } = useApp()
  const { attributes } = eventDetails.data || {}

  useEffect(() => {
    if (eventDetails.data?.attributes?.image) {
      setBanner(eventDetails.data.attributes.image.data)
    }
    if (eventDetails.data?.attributes?.title) {
      setTitleBanner(eventDetails.data.attributes.title)
    }
  }, [eventDetails])

  return (
    <PageContentWrapper>
      <SinglePageContentWrapper>
        <RichText content={attributes?.content || attributes?.description} />
      </SinglePageContentWrapper>
    </PageContentWrapper>
  )
}

export const getServerSideProps = withDetectDevice(
  withGlobalData(withEvent(withTrans))
)

export default withNavigator(EventDetails)
