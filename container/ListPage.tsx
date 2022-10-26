import { Col, Row } from "antd"
import { EListType, EMediaType, TListPageAttributes } from "definition"
import { Media } from "elements/Media"
import { RichText } from "elements/RichText"
import { getMediaType } from "helper"
import Link from "next/link"
import { Container } from "react-bootstrap"
import styled from "styled-components"

const ListItemTitleWrapper = styled.h2`
  transition: color 0.1s linear;
  font-size: 18px;
  padding: 12px;
`

const ListItemWrapper = styled.div`
  border-radius: 2px;
  background-color: #fff;
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
      {dataList.map(({ title, content, media, slug, cover }, idx) => {
        const { type } = getMediaType(media.data)
        return (
          <Col
            key={`page-list-col-${idx}`}
            span={24}
            lg={{ span: 24 / listItemCount }}
          >
            <ListItemWrapper>
              <Media mediaData={media.data} name={title} cover={cover?.data} />
              <div className='p-3'>
                {slug ? (
                  <Link href={slug}>
                    <ListItemTitleWrapper as='a'>{title}</ListItemTitleWrapper>
                  </Link>
                ) : (
                  <ListItemTitleWrapper>{title}</ListItemTitleWrapper>
                )}
                {content && <RichText>{content}</RichText>}
              </div>
            </ListItemWrapper>
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
  padding-top: 48px;
  padding-bottom: 80px;
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
          <Col span={18}>
            <ContentComponent
              dataList={dataList}
              listItemCount={listItemCount}
            />
          </Col>
          <Col span={6}>{category}</Col>
        </Row>
      ) : (
        <ContentComponent dataList={dataList} listItemCount={listItemCount} />
      )}
    </ListPageWrapper>
  )
}

export default ListPage
