import { Card, Col, Row } from "antd";
import React, { FC } from "react";
import { DivGurusWrapper } from "./index.styles";
import { IconFB, IconInstagram, IconTW } from "../../assets/svgs/index";
import i18next from "i18next";
import { useApp } from "context/app/AppContext";
import { useTranslation } from "react-i18next";
const { Meta } = Card;
const GURUS = [
  {
    imgURL: "/images/gurus/H.H-Chetsang.png",
    name: "H.H Kyabgon Chetsang Rinpoche",
    des: "His Holiness Drikung Kyabgon Chetsang Rinpoche, the thirty-seventh in the line of throne holders in the Drikung Kagyu lineage and current Drikung Kyabgon, and author to several Buddhism publications.",
    fb: "",
    ins: "",
  },
  {
    imgURL: "/images/gurus/LamaJorjel.png",
    name: "Lama Jorjel Rinpoche",
    des: "The late biological father to Choeze Kuchen Rinpoche, Lama Jorjel has been regarded as one of the experience yogi in the Tibetan Buddhism space. He was also the long time spiritual teacher to Choeze Kuchen Rinpoche.",
    fb: "",
    ins: "",
  },
  {
    imgURL: "/images/gurus/ChoezeRinpoche.png",
    name: "Choeze Kuchen Rinpoche",
    des: "Born as Kunchok Thrinley Lhundup Namgyal in Kathmandu, Nepal in 1984. At the age of two, His Holiness Drikung Kyabgon Chetsang Rinpoche and His Holiness Drikung Kyabgon Chungtsang Rinpoche recognized him as the 11th incarnation of Choeze Kuchen Rinpoche.",
    fb: "",
    ins: "",
  },
];

const Gurus: FC<{}> = () => {
  const { t, i18n } = useTranslation(["content"]);
  const Description = ({ item }: any) => {
    return (
      <>
        <p>{t(item.des, { ns: "content" })}</p>
        <div className="btn-group">
          {item.fb !== "" && (
            <div className="">
              <div className="icon">
                <IconFB />
              </div>
            </div>
          )}
          {item.ins !== "" && (
            <div className="">
              <div className="icon">
                <IconInstagram />
              </div>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <DivGurusWrapper>
      <div className="section">
        <div className="container">
          <Row>
            <Col span={24} className="section-title">
              <h2>{t("Meet the Gurus", { ns: "content" })}</h2>
              <h4>
                {t(
                  "choeze kuchen rinpoche buddhism practices are greatly influenced by his gurus.",
                  { ns: "content" }
                )}
              </h4>
            </Col>
            <Col span={24}>
              <Row className="section-group" justify="center">
                {GURUS.map((item, i) => {
                  if (i === 0) {
                    return (
                      <Row key={i} className="section-item" justify="center">
                        <Col span={24} md={10}>
                          <Card
                            // style={{ width:  }}
                            bordered={false}
                            cover={
                              <img
                                src={item.imgURL}
                                alt="gurus"
                                height={400}
                                style={{ objectFit: "contain" }}
                              />
                            }
                          >
                            <Meta
                              title={<h4>{t(item.name, { ns: "content" })}</h4>}
                              description={<Description item={item} />}
                            />
                          </Card>
                        </Col>
                      </Row>
                    );
                  }
                  return (
                    <Col
                      key={i}
                      className="section-item"
                      xs={24}
                      sm={24}
                      md={24}
                      lg={12}
                      xl={10}
                    >
                      <Card
                        // style={{ width:  }}
                        bordered={false}
                        cover={
                          <img
                            src={item.imgURL}
                            alt="gurus"
                            height={300}
                            style={{ objectFit: "contain" }}
                          />
                        }
                      >
                        <Meta
                          title={<h4>{t(item.name, { ns: "content" })}</h4>}
                          description={<Description item={item} />}
                        />
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </DivGurusWrapper>
  );
};
export default Gurus;
