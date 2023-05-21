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
import { Button } from "elements/Button"
import { ArrowRight, ArrowRightAlt } from "@mui/icons-material"
import { useRouter } from "next/router"

const TeachingItemWrapper = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.primary};
  padding: 8px;
  height: 100%;
`

export const TeachingItem: React.FC = ({
  id,
  redirectPage,
  redirectTitle,
  cover,
  title,
  description
}) => {
  const router = useRouter()
  console.log({ redirectPage, redirectTitle })

  return (
    <TeachingItemWrapper>
      <Link href={redirectPage?.data?.attributes?.slug ?? "/"}>
        <div
          style={{
            position: "relative",
            height: "100%"
          }}
        >
          <GridMedia
            style={{ borderRadius: 8 }}
            url={cover.data?.attributes?.url}
          />
          <div
            style={{
              textAlign: "center",
              position: "relative",
              paddingBottom: 40
            }}
          >
            <h3
              className='ellipsis'
              style={{
                fontSize: 20,
                margin: "16px 0 12px",
                color: THEME.primary
              }}
            >
              {title}
            </h3>
            <RichText fontSize='15px' content={description} />
          </div>
          <Button
            onClick={() =>
              router.push(redirectPage?.data?.attributes?.slug ?? "/")
            }
            size='large'
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              borderRadius: 4,
              display: "flex",
              justifyContent: "space-between"
            }}
            type='primary'
            block
          >
            {redirectTitle}
            <ArrowRightAlt style={{ color: THEME.white }} />
          </Button>
        </div>
      </Link>
    </TeachingItemWrapper>
  )
}
