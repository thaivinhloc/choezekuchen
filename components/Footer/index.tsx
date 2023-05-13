// @ts-nocheck
import React from "react"
import Link from "next/link"
import { DivFooterWrapper } from "./index.style"
import { Col, Row, Space } from "antd"
import { useTranslation } from "next-i18next"
import { Button } from "elements/Button"
import Image from "next/image"

const Footer = ({ data, isMobile }) => {
  const { t } = useTranslation()
  const {
    Socials = [],
    contacts = [],
    footer_background,
    logo,
    site_name
  } = data?.attributes || {}
  console.log("Footer", { contacts, Socials, logo })
  return (
    <DivFooterWrapper style={{ background: footer_background }}>
      <h2
        style={{
          fontSize: 1,
          visibility: "hidden",
          lineHeight: "1px",
          margin: 0,
          padding: 0,
          height: 1,
          width: 1
        }}
      >
        {t("Contact")}
      </h2>
      <div className='container'>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo?.data?.attributes?.url ?? "/logo.png"}
            width={isMobile ? 60 : 80}
            height={isMobile ? 60 : 80}
            alt='Logo'
          />
          <strong
            style={{
              marginLeft: 12,
              fontSize: isMobile ? 16 : 24,
              color: "#fff"
            }}
          >
            {site_name}
          </strong>
        </div>
        <div
          style={{
            textTransform: "uppercase",
            color: "#fff",
            display: "flex",
            alignItems: "flex-end",
            margin: "16px 0 32px"
          }}
        >
          <div
            style={{
              fontWeight: 600,
              fontSize: 24,
              lineHeight: "24px",
              whiteSpace: "nowrap"
            }}
          >
            {t("Contact us")}
          </div>
          <div
            style={{
              background: "#fff",
              height: 1,
              width: "100%",
              marginLeft: 12
            }}
          />
        </div>
        <Row gutter={[16, 16]}>
          <Col
            span={24}
            xl={{
              span: 4
            }}
          >
            <Space size={12}>
              {Socials?.map(({ link, icon }) => (
                <Link href={link} key={link}>
                  <a className='icon' target='_blank'>
                    <img height={40} src={icon.data.attributes.url} />
                  </a>
                </Link>
              ))}
            </Space>
          </Col>
          <Col
            span={24}
            xl={{
              span: 20
            }}
          >
            <Row gutter={[24, 24]}>
              {contacts?.map((item) => (
                <Col span={24} lg={{ span: 12 }} key={item.address}>
                  <h3>{item.name}</h3>
                  <div style={{ display: "flex", marginBottom: 14 }}>
                    <div
                      style={{
                        border: "1px solid #fff",
                        borderRadius: "50%",
                        padding: 4,
                        marginRight: 8,
                        height: 24,
                        width: 24,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Image
                        width={16}
                        height={16}
                        src={require("assets/svgs/pin-icon.svg")}
                      />
                    </div>
                    <p>{item.address}</p>
                  </div>
                  {item.phone && (
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          border: "1px solid #fff",
                          borderRadius: "50%",
                          padding: 4,
                          marginRight: 8,
                          height: 24,
                          width: 24,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <Image
                          width={16}
                          height={16}
                          src={require("assets/svgs/phone-icon.svg")}
                        />
                      </div>
                      <p>{item.phone}</p>
                    </div>
                  )}
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </DivFooterWrapper>
  )
}

export default Footer
