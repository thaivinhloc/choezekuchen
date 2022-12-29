// @ts-nocheck
import React from "react"
import Link from "next/link"
import { DivFooterWrapper, TestBox } from "./index.style"
import { Col, Row, Space } from "antd"
import { useTranslation } from "next-i18next"

const Footer = ({ data, isMobile }) => {
  const { t } = useTranslation()
  const { Socials = [], contacts = [] } = data?.attributes || {}
  console.log("Footer", { contacts, Socials })
  return (
    <DivFooterWrapper>
      <div className='container'>
        <h2 style={{ visibility: "hidden", height: 1, width: 1 }}>
          {t("Contact")}
        </h2>
        <Space style={{ width: "100%" }} direction='vertical' size='large'>
          <Row gutter={[24, 12]}>
            {contacts?.map((item) => (
              <Col span={24} lg={{ span: 6 }}>
                <h3>{item.name}</h3>
                <p>{item.address}</p>
                {item.phone && <p>Tel: {item.phone}</p>}
              </Col>
            ))}
          </Row>
          <Row gutter={24}>
            <Col span={24} lg={{ span: 6 }}>
              <h3>{t("Follow us")}</h3>
              <Space size={12}>
                {Socials?.map(({ link, icon }) => (
                  <Link href={link}>
                    <a className='icon' target='_blank'>
                      <img height={28} src={icon.data.attributes.url} />
                    </a>
                  </Link>
                ))}
              </Space>
            </Col>
          </Row>
        </Space>
      </div>
    </DivFooterWrapper>
  )
}

export default Footer
