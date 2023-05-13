import { Col, Row } from "antd"
import { Button } from "elements/Button"
import { EListType, EMediaType, TListPageAttributes } from "definition"
import { Media } from "elements/Media"
import { RichText } from "elements/RichText"
import { getMediaType } from "helper"
import Link from "next/link"
import { Container } from "react-bootstrap"
import { useTranslation } from "next-i18next"
import styled from "styled-components"
import { ArrowRightOutlined } from "@ant-design/icons"

const ListItemTitleWrapper = styled.h2<any>`
  transition: color 0.1s linear !important;
  font-size: 16px !important;
  cursor: pointer;
  color: ${(props) => props.theme.primary} !important;
  a {
    color: ${(props) => props.theme.primary};
  }
`

const ListItemWrapper = styled.div`
  border-radius: 2px;
  padding-top: 8px;
`

function GridContent({
  dataList = [],
  listItemCount = 1,
  previewable,
  downloadable,
  mediaProps
}: Partial<TListPageAttributes & { listItemStyle: Record<string, any> }>) {
  if (!listItemCount) {
    listItemCount = 1
  }
  return (
    <Row gutter={[24, 24]}>
      {dataList.map(({ title, description, media, slug, cover }, idx) => {
        return (
          <Col
            key={`page-list-col-${idx}`}
            span={24}
            lg={{ span: 24 / listItemCount }}
          >
            <ListItemWrapper>
              {slug ? (
                <Link href={slug}>
                  <ListItemTitleWrapper
                    as='a'
                    style={{
                      padding: 0,
                      textAlign: "center"
                    }}
                  >
                    {title}
                  </ListItemTitleWrapper>
                </Link>
              ) : (
                <ListItemTitleWrapper
                  style={{
                    padding: 0,
                    textAlign: "center"
                  }}
                >
                  {title}
                </ListItemTitleWrapper>
              )}
              <Media
                mediaData={media.data}
                name={title}
                cover={cover?.data}
                ratioHeight={720 / listItemCount}
                previewable={previewable}
                downloadable={downloadable}
                {...mediaProps}
              />
            </ListItemWrapper>
          </Col>
        )
      })}
    </Row>
  )
}

function GridReverse({
  dataList = [],
  previewable,
  downloadable
}: Partial<TListPageAttributes & { listItemStyle: Record<string, any> }>) {
  return (
    <>
      {dataList.map(({ title, description, media, slug }, idx) => {
        let mediaOrder = idx % 2 === 0 ? 0 : 1
        return (
          <Row
            key={`page-list-row-${idx}`}
            style={{ marginLeft: -15, marginRight: -15, marginBottom: 24 }}
            gutter={24}
          >
            <Col order={mediaOrder} span={24} lg={{ span: 10 }}>
              <Media
                mediaData={media.data}
                name={title}
                previewable={previewable}
                downloadable={downloadable}
              />
            </Col>
            <Col span={24} lg={{ span: 14 }}>
              {slug ? (
                <Link href={slug}>
                  <ListItemTitleWrapper as='a'>{title}</ListItemTitleWrapper>
                </Link>
              ) : (
                <ListItemTitleWrapper>{title}</ListItemTitleWrapper>
              )}
              {description && <RichText content={description} />}
            </Col>
          </Row>
        )
      })}
    </>
  )
}

function GridBlog({
  dataList = [],
  listItemCount,
  previewable,
  downloadable,
  onRowClick,
  mediaProps = {},
  action_title,
  listItemStyle
}: Partial<TListPageAttributes & { listItemStyle: Record<string, any> }>) {
  const titleStyle = {
    textAlign: "left",
    fontSize: 18,
    lineHeight: "24px"
  }
  console.log({ action_title })

  return (
    <Row gutter={[24, 32]}>
      {dataList.map(({ id, title, description, media, slug }, idx) => {
        return (
          <Col
            lg={{ span: 24 / (listItemCount ?? 1) }}
            key={`page-list-col-${idx}`}
            style={listItemStyle ?? {}}
          >
            <Row gutter={{ xl: 32 }}>
              <Col span={24} lg={{ span: 10 }}>
                <div style={{ marginBottom: 16 }}>
                  <Media
                    mediaData={media.data}
                    name={title}
                    width={600}
                    height={600}
                    ratio='1/1'
                    ratioHeight={720 / (listItemCount ?? 1)}
                    previewable={previewable}
                    downloadable={downloadable}
                    {...mediaProps}
                  />
                </div>
              </Col>
              <Col span={24} lg={{ span: 14 }} style={{ alignSelf: "stretch" }}>
                {!onRowClick && slug ? (
                  <ListItemTitleWrapper style={titleStyle}>
                    <Link href={slug}>
                      <a>{title}</a>
                    </Link>
                  </ListItemTitleWrapper>
                ) : (
                  <ListItemTitleWrapper
                    style={titleStyle}
                    onClick={() => onRowClick?.({ id, slug: slug ?? "" })}
                  >
                    {title}
                  </ListItemTitleWrapper>
                )}
                {description && <RichText content={description} />}

                {onRowClick && slug && action_title ? (
                  <Button
                    style={{
                      padding: 0,
                      color: "#A51818",
                      whiteSpace: "normal",
                      height: "fit-content",
                      fontSize: 15,
                      fontWeight: 400
                    }}
                    size='large'
                    type='link'
                    onClick={() => onRowClick?.({ id, slug: slug ?? "" })}
                  >
                    {action_title} <ArrowRightOutlined />
                  </Button>
                ) : slug && action_title ? (
                  <Button
                    style={{
                      padding: 0,
                      color: "#A51818",
                      whiteSpace: "normal",
                      height: "fit-content",
                      fontSize: 15,
                      fontWeight: 400
                    }}
                    size='large'
                    type='link'
                    href={slug}
                  >
                    {action_title} <ArrowRightOutlined />
                  </Button>
                ) : null}
              </Col>
            </Row>
          </Col>
        )
      })}
    </Row>
  )
}

const ListLayoutWrapper = styled(Container)`
  padding-top: 48px;
  padding-bottom: 80px;
`

const ListLayout: React.FC<
  TListPageAttributes & { listItemStyle?: Record<string, any> }
> = ({
  listType,
  dataList = [],
  listItemCount,
  category,
  meta,
  previewable,
  downloadable,
  onRowClick,
  mediaProps,
  listItemStyle,
  action_title
}) => {
  const hasCategory = !!category
  const ContentComponent =
    listType === EListType.GRID
      ? GridContent
      : listType === EListType.REVERSE
      ? GridReverse
      : GridBlog

  return (
    <ListLayoutWrapper>
      {hasCategory ? (
        <Row gutter={32}>
          <Col span={18}>
            <ContentComponent
              dataList={dataList}
              listItemCount={listItemCount}
              previewable={previewable}
              downloadable={downloadable}
              onRowClick={onRowClick}
              mediaProps={mediaProps}
              listItemStyle={listItemStyle}
              action_title={action_title}
            />
          </Col>
          <Col span={6}>{category}</Col>
        </Row>
      ) : (
        <ContentComponent
          previewable={previewable}
          downloadable={downloadable}
          dataList={dataList}
          listItemCount={listItemCount}
          onRowClick={onRowClick}
          mediaProps={mediaProps}
          listItemStyle={listItemStyle}
          action_title={action_title}
        />
      )}
      {meta?.pagination && <div>Pagination here</div>}
    </ListLayoutWrapper>
  )
}

export default ListLayout
