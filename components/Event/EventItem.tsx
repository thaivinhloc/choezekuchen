// @ts-nocheck
import { Col, Row } from "antd"
import { THEME } from "common"
import { GridMedia } from "elements/Media"
import { getEventPathFromSlug } from "helper"
import Link from "next/link"
import styled from "styled-components"
import moment from "moment"
import { RichText } from "elements/RichText"
import { useTranslation } from "next-i18next"

const EventItemWrapper = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
`

export const EventItem: React.FC = ({
  id,
  slug,
  image,
  dateStart,
  dateEnd,
  title,
  description
}) => {
  const { t } = useTranslation()
  return (
    <EventItemWrapper>
      <Link href={getEventPathFromSlug(id, slug)}>
        <div
          style={{
            position: "relative",
            cursor: "pointer",
            background: "#fff",
            borderRadius: "8px"
          }}
        >
          <GridMedia style={{ borderRadius: "8px 8px 0 0" }} url={image.url} width={640} height={360} />
          <Row
            gutter={16}
            align='middle'
            style={{ padding: "0 12px", marginTop: 12 }}
          >
            <Col span={6}>
              <div style={{ textAlign: "center", color: THEME.primary }}>
                <span
                  style={{
                    display: "block",
                    fontWeight: 600,
                    fontSize: 28,
                    lineHeight: "28px"
                  }}
                >
                  {moment(dateStart).format("DD")}
                </span>
                <span>{moment(dateStart).format("MMM YYYY")}</span>
              </div>
            </Col>
            <Col span={18}>
              <h3 className='ellipsis' style={{ fontSize: 20, margin: 0 }}>
                {title}
              </h3>
              <i
                style={{
                  color: THEME.dark,
                  fontWeight: 300,
                  fontSize: 14,
                  display: "block",
                  marginBottom: 8
                }}
              >
                {t("Time: ")}
                {moment(dateStart).format("hh:mmA")}-
                {moment(dateEnd).format("hh:mmA")}
              </i>
              <RichText fontSize='16px' content={description} />
            </Col>
          </Row>
        </div>
      </Link>
    </EventItemWrapper>
  )
}
