// @ts-nocheck
import { ArrowRightAlt } from "@mui/icons-material"
import { Col, Form, Input, InputNumber, Radio, Row, Space } from "antd"
import { useForm } from "antd/lib/form/Form"
import { THEME } from "common"
import { TITLE_SIZES, Title } from "components/Title"
import { TitleWithHeadline } from "components/Title/TitleWithHeadline"
import { SingleSection, SingleSectionSmall } from "container/Section"
import { Button } from "elements/Button"
import { GridMedia } from "elements/Media"
import { Modal } from "elements/Modal"
import { RichText } from "elements/RichText"
import usePage from "hook/usePage"
import { useTranslation } from "next-i18next"
import Image from "next/image"
import { useRouter } from "next/router"
import { ElementRef, forwardRef, useEffect, useRef, useState } from "react"
import styled from "styled-components"

const OfferingPageWrapper = styled.div``
const IntroductionWrapper = styled.div`
  background: url(${(props) => props.background?.data?.attributes?.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom center;
  padding: 50px 0;
`

const OfferingItem = styled.div`
  text-align: center;
  color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 12px;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  strong {
    font-size: 20px;
    display: block;
  }
  &:hover {
    background-color: ${(props) => props.theme.primary};
    cursor: pointer;
    color: ${(props) => props.theme.white};
    > div {
      &:first-of-type {
        display: none !important;
      }
    }
  }
`

const PrayersWrapper = styled.div`
  height: 100%;
  padding: 16px;
  position: relative;
  border: 3px solid ${(props) => props.theme.primary};
  border-radius: 12px;
  h3,
  button {
    color: ${(props) => props.theme.primary};
  }

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    h3,
    button,
    p,
    span {
      color: ${(props) => props.theme.white};
    }
  }
`

const MakeOfferingWrapper = styled.div``

const OfferingBannerWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  background-image: url(${(props) => props.cover});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 16px;
  margin-bottom: 16px;
  h2 {
    margin: 0 !important;
    position: relative;
    z-index: 2;
    @media (max-width: 991px) {
      font-size: 20px !important;
    }
  }
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 12px;
  }
`

const CloseIcon = ({ ...props }) => {
  return (
    <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z'
        fill='none'
        stroke='#800000'
        strokeMiterlimit='10'
        strokeWidth='32px'
        class='stroke-000000'
      ></path>
      <path
        d='M320 320 192 192M192 320l128-128'
        fill='none'
        stroke='#800000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32px'
        class='stroke-000000'
      ></path>
    </svg>
  )
}

const PaymentForm = styled.div``

const PaymentFormSection = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    line-height: 32px;
  }
`

export const OfferingPage = ({
  locale,
  isMobile,
  globalData,
  pageContentEndpoint
}) => {
  const [form] = Form.useForm()
  const makeOfferingModalRef = useRef<ElementRef<typeof Modal>>(null)
  const amountInputRef = useRef()
  const [amountRadioValue, setAmountRadioValue] = useState(30)
  const [openedOffering, setOpenedOffering] = useState()
  const { content, getPageContent } = usePage({
    locale,
    endpoint: pageContentEndpoint,
    params: {
      "populate[0]": "introduction",
      "populate[1]": "introduction.headLine",
      "populate[2]": "introduction.background",
      "populate[3]": "introduction.contentList",
      "populate[4]": "introduction.contentList.cover",
      "populate[5]": "introduction.contentList.actionIcon",
      "populate[6]": "makeOffering",
      "populate[7]": "makeOffering.contentList",
      "populate[8]": "makeOffering.contentList.cover",
      "populate[13]": "makeOffering.contentList.actionIcon",
      "populate[9]": "otherOffering",
      "populate[10]": "otherOffering.contentList",
      "populate[11]": "otherOffering.contentList.cover",
      "populate[12]": "banner"
    }
  })

  const { t } = useTranslation()

  useEffect(() => {
    if (pageContentEndpoint) {
      getData()
    }
    async function getData() {
      await getPageContent()
    }
  }, [pageContentEndpoint])

  useEffect(() => {
    if (openedOffering) {
      makeOfferingModalRef.current?.handleOpen()
    } else {
      makeOfferingModalRef.current?.handleClose()
    }
  }, [openedOffering])

  console.log({ content })
  const { introduction, makeOffering, otherOffering, banner } =
    content?.data?.attributes ?? {}

  const offeringOptions = [30, 60, 108]
  console.log({ values: form?.getFieldsValue() })

  return (
    <OfferingPageWrapper>
      {introduction && (
        <IntroductionWrapper background={introduction.background}>
          <div className='container' style={{ marginBottom: 50 }}>
            <SingleSectionSmall
              title={introduction.title}
              content={introduction.content}
              headLine={introduction.headLine}
            />
          </div>
          <div className='container'>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <TitleWithHeadline
                title={t("Make an Offering by Credit Card or PayPal")}
              />
            </div>
            <Row justify='space-between' gutter={[{ xs: 16, sm: 16, xl: 0 }, 24]}>
              {introduction.contentList?.map((item) => {
                const { title, actionIcon } = item
                return (
                  <Col span={12} lg={{ span: 4 }}>
                    <OfferingItem onClick={() => setOpenedOffering(item)}>
                      <div style={{ width: 80, margin: "0 auto 10px" }}>
                        <Image
                          src={actionIcon?.data?.attributes?.url}
                          {...(actionIcon?.data?.attributes ?? {})}
                          layout='responsive'
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flex: "1 1 auto"
                        }}
                      >
                        <strong>{title}</strong>
                      </div>
                    </OfferingItem>
                  </Col>
                )
              })}
            </Row>
          </div>
        </IntroductionWrapper>
      )}
      {otherOffering && (
        <div style={{ padding: "50px 0" }}>
          <div className='container'>
            <SingleSection
              title={otherOffering.title}
              content={otherOffering.content}
            />
            <div style={{ height: 50 }} />
            <Row gutter={[40, 24]} align='top'>
              {otherOffering.contentList?.map((item) => (
                <Col
                  span={24}
                  lg={{ span: 12 }}
                  style={{ alignSelf: "stretch" }}
                >
                  <PrayersWrapper>
                    <GridMedia
                      url={item.cover?.data?.attributes.url}
                      name={item.cover?.data?.attributes.name}
                      width={600}
                      height={400}
                      style={{ borderRadius: 4 }}
                    />
                    <div>
                      <div style={{ paddingBottom: 50 }}>
                        <h3 style={{ fontSize: 28 }}>{item.title}</h3>
                        <RichText content={item.description} />
                      </div>
                      <div
                        style={{ position: "absolute", bottom: 16, left: 16 }}
                      >
                        <Button
                          type='text'
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "12px 0"
                          }}
                        >
                          <span style={{ display: "block", marginRight: 10 }}>
                            {t("See more")}
                          </span>{" "}
                          <ArrowRightAlt />
                        </Button>
                      </div>
                    </div>
                  </PrayersWrapper>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
      {banner && (
        <div style={{ padding: "24px 0 50px" }}>
          <div className='container'>
            <GridMedia
              url={banner?.data?.attributes.url}
              name={banner?.data?.attributes.name}
              width={banner?.data?.attributes?.width}
              height={banner?.data?.attributes?.height}
              style={{ borderRadius: 16 }}
            />
          </div>
        </div>
      )}
      {makeOffering && (
        <div style={{ padding: "24px 0 80px" }}>
          <div className='container'>
            <Title
              size={TITLE_SIZES.MEDIUM}
              title={t("Make an Offering")}
              supTitle={t("Other ways to")}
            />
            <div style={{ height: 42 }} />
            <MakeOfferingWrapper>
              <Row gutter={[24, 24]}>
                {makeOffering.contentList?.map(
                  ({ id, order, title, description, actionIcon }) => (
                    <Col span={24} xl={{ span: order === 1 ? 24 : 12 }}>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{ width: 40, minWidth: 40, marginRight: 10 }}
                        >
                          <Image
                            src={actionIcon?.data?.attributes.url}
                            {...actionIcon?.data?.attributes}
                            layout='responsive'
                          />
                        </div>
                        <div>
                          <h3
                            style={{
                              color: THEME.primary,
                              margin: "6px 0 12px",
                              fontWeight: "bold"
                            }}
                          >
                            {title}
                          </h3>
                          <RichText content={description} />
                        </div>
                      </div>
                    </Col>
                  )
                )}
              </Row>
            </MakeOfferingWrapper>
          </div>
        </div>
      )}

      <Modal
        ref={makeOfferingModalRef}
        width='768px'
        closeIcon={<div />}
        onCancel={() => {
          setOpenedOffering()
          form.resetFields()
          setAmountRadioValue(offeringOptions[0])
        }}
        wrapClassName='make-offering-modal'
        destroyOnClose
      >
        <Form
          form={form}
          size='large'
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            amount: 30
          }}
          name='paymentForm'
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16
            }}
          >
            <div style={{ width: 42 }}>
              <Image
                src={openedOffering?.actionIcon?.data?.attributes?.url}
                {...(openedOffering?.actionIcon?.data?.attributes ?? {})}
                layout='responsive'
              />
            </div>
            <CloseIcon style={{ width: 42 }} />
          </div>

          <OfferingBannerWrapper
            cover={openedOffering?.cover?.data?.attributes?.url}
          >
            <TitleWithHeadline
              color={THEME.white}
              title={openedOffering?.title}
            />
          </OfferingBannerWrapper>
          <PaymentForm>
            <PaymentFormSection>
              <h4>{t("Personal Information")}</h4>
              <div
                style={{
                  height: 1,
                  backgroundColor: THEME.primary,
                  marginBottom: 12
                }}
              />
              <Row gutter={[16, 16]}>
                <Col span={24} md={{ span: 12 }}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: t("Please enter your first name")
                      }
                    ]}
                    name='firstName'
                  >
                    <Input placeholder={t("First name")} />
                  </Form.Item>
                </Col>
                <Col span={24} md={{ span: 12 }}>
                  <Form.Item name='lastName'>
                    <Input placeholder={t("Last name")} />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: t("Please enter your email")
                  }
                ]}
              >
                <Input placeholder={t("Email address")} />
              </Form.Item>
            </PaymentFormSection>
            <Row gutter={[32, 16]}>
              <Col span={24} md={{ span: 12 }}>
                <PaymentFormSection>
                  <h4>{t("Your offering")}</h4>
                  <div
                    style={{
                      height: 1,
                      backgroundColor: THEME.primary,
                      marginBottom: 12
                    }}
                  />
                  <Form.Item
                    valuePropName='value'
                    name='amount'
                    rules={[
                      {
                        required: true,
                        message: t("Please enter an amount")
                      }
                    ]}
                  >
                    <InputNumber
                      ref={amountInputRef}
                      controls={false}
                      addonBefore='$'
                      decimalSeparator='.'
                      step='0.01'
                      onChange={(value) => {
                        console.log({ value })
                        form.setFieldsValue({
                          ...form.getFieldsValue(),
                          amount: value
                        })
                      }}
                      onBlur={() => {
                        const updatedValue = form.getFieldValue("amount")
                        console.log({ updatedValue })

                        if (!updatedValue) {
                          setAmountRadioValue(offeringOptions[0])
                          form.setFieldsValue({
                            ...form.getFieldsValue(),
                            amount: offeringOptions[0]
                          })
                        } else {
                          setAmountRadioValue(
                            offeringOptions.includes(updatedValue)
                              ? updatedValue
                              : undefined
                          )
                        }
                      }}
                      onFocus={() => setAmountRadioValue()}
                    />
                  </Form.Item>
                  <Radio.Group
                    onChange={(e) => {
                      setAmountRadioValue(e.target.value)
                      form.setFieldsValue({
                        ...form.getFieldsValue(),
                        amount: e.target.value
                      })
                      if (!e.target.value) {
                        amountInputRef.current?.focus()
                      }
                    }}
                    value={amountRadioValue}
                  >
                    <Space direction='vertical'>
                      {offeringOptions.map((value) => (
                        <Radio value={value}>
                          ${value.toFixed(2)}, {t("Payment Monthly")}
                        </Radio>
                      ))}
                      <Radio value={undefined}>{t("Custom amount")}</Radio>
                    </Space>
                  </Radio.Group>
                </PaymentFormSection>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <PaymentFormSection>
                  <h4>{t("Payment Method")}</h4>
                  <div
                    style={{
                      height: 1,
                      backgroundColor: THEME.primary,
                      marginBottom: 12
                    }}
                  />
                </PaymentFormSection>
              </Col>
            </Row>
          </PaymentForm>
          <div
            style={{
              backgroundColor: THEME.primary,
              padding: "16px 24px",
              margin: "24px 0"
            }}
          >
            <table style={{ color: THEME.white, width: "100%" }}>
              <tr>
                <td>
                  <strong style={{ fontSize: 18 }}>
                    {t("Total Offering")}
                  </strong>
                </td>
                <td align='right'>
                  <Form.Item shouldUpdate>
                    {() => {
                      return (
                        <strong style={{ color: THEME.white }}>
                          ${form.getFieldValue("amount")?.toFixed(2) ?? "0.00"}
                        </strong>
                      )
                    }}
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td style={{ borderTop: "1px solid #fff" }}></td>
                <td style={{ borderTop: "1px solid #fff" }}></td>
              </tr>
              <tr>
                <td>
                  <i>{t("Payment Donation")}</i>
                </td>
                <td align='right'>
                  <Form.Item shouldUpdate>
                    {() => {
                      return (
                        <i style={{ color: THEME.white }}>
                          ${form.getFieldValue("amount")?.toFixed(2) ?? "0.00"}
                        </i>
                      )
                    }}
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td>
                  <i>{t("Payment Fee")}</i>
                </td>
                <td align='right'>
                  <i>$0.00</i>
                </td>
              </tr>
            </table>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              type='primary'
              shape='round'
              size='large'
              style={{ height: 55, paddingLeft: 28, paddingRight: 28 }}
            >
              {t("Make Offering")}
            </Button>
          </div>
        </Form>
      </Modal>
      <style jsx global>{`
        .make-offering-modal .ant-modal-content {
          border-radius: 12px;
          border: 5px solid #800000;
          padding: 0;
        }
        .make-offering-modal .ant-modal-content .ant-modal-body {
          padding: 24px;
        }
      `}</style>
    </OfferingPageWrapper>
  )
}

export default OfferingPage