import { Col, Row } from "antd"
import { EListType, TListPageAttributes } from "definition"
import { Media } from "elements/Media"
import { RichText } from "elements/RichText"
import { getMediaType } from "helper"
import Link from "next/link"
import { Container } from "react-bootstrap"
import styled from "styled-components"

const ListItemTitleWrapper = styled.h2`
  transition: color 0.1s linear;
  color: #303030;
  font-size: 20px;
  line-height: 1.384615384615385em;
  letter-spacing: 1px;
  font-weight: 600;
`

function GridContent({
  dataList = [],
  listItemCount = 1
}: Partial<TListPageAttributes>) {
  if (!listItemCount) {
    listItemCount = 1
  }
  return (
    <Row gutter={[24, 32]}>
      {dataList.map(({ title, content, media, slug }, idx) => {
        return (
          <Col
            key={`page-list-col-${idx}`}
            span={24}
            lg={{ span: 24 / listItemCount }}
          >
            <Media mediaData={media.data} name={title} />
            {slug ? (
              <Link href={slug}>
                <ListItemTitleWrapper as='a'>{title}</ListItemTitleWrapper>
              </Link>
            ) : (
              <ListItemTitleWrapper>{title}</ListItemTitleWrapper>
            )}
            {content && <RichText>{content}</RichText>}
          </Col>
        )
      })}
    </Row>
  )
}

function GridReverse({ dataList = [] }: Partial<TListPageAttributes>) {
  return (
    <Row gutter={[24, 32]}>
      {dataList.map(({ title, content, media, slug }, idx) => {
        let mediaOrder = idx % 2 ? 1 : 2
        return (
          <Col span={24} key={`page-list-col-${idx}`}>
            <Row>
              <Col order={mediaOrder}>
                <Media mediaData={media.data} name={title} />
              </Col>
              <Col>
                {slug ? (
                  <Link href={slug}>
                    <ListItemTitleWrapper as='a'>{title}</ListItemTitleWrapper>
                  </Link>
                ) : (
                  <ListItemTitleWrapper>{title}</ListItemTitleWrapper>
                )}
                {content && <RichText>{content}</RichText>}
              </Col>
            </Row>
          </Col>
        )
      })}
    </Row>
  )
}

function GridBlog({ dataList = [] }: Partial<TListPageAttributes>) {
  return (
    <Row gutter={[24, 32]}>
      {dataList.map(({ title, content, media, slug }, idx) => {
        return (
          <Col span={24} key={`page-list-col-${idx}`}>
            <Row>
              <Col span={24}>
                <Media mediaData={media.data} name={title} />
              </Col>
              <Col>
                {slug ? (
                  <ListItemTitleWrapper>
                    <Link href={slug}>
                      <a>{title}</a>
                    </Link>
                  </ListItemTitleWrapper>
                ) : (
                  <ListItemTitleWrapper>{title}</ListItemTitleWrapper>
                )}
                {content && <RichText>{content}</RichText>}
              </Col>
            </Row>
          </Col>
        )
      })}
    </Row>
  )
}

const ListPageWrapper = styled(Container)`
  padding-top: 60px;
  padding-bottom: 100px;
`

const ListPage: React.FC<TListPageAttributes> = ({
  listType,
  dataList = [],
  listItemCount,
  category
}) => {
  const hasCategory = !!category
  const ContentComponent =
    listType === EListType.GRID
      ? GridContent
      : listType === EListType.REVERSE
      ? GridReverse
      : GridBlog

  console.log({ dataList })

  return (
    <ListPageWrapper>
      {hasCategory ? (
        <Row gutter={32}>
          <Col span={5}>{category}</Col>
          <Col span={19}>
            <ContentComponent
              dataList={dataList}
              listItemCount={listItemCount}
            />
          </Col>
        </Row>
      ) : (
        <ContentComponent dataList={dataList} listItemCount={listItemCount} />
      )}
    </ListPageWrapper>
  )
}

export default ListPage
