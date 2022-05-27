import { Card, Col, Row } from "antd";
import React, { FC, useEffect } from "react";
import { DivHomeWrapper } from "./index.styles";

const { Meta } = Card;
const ABOUT = [
    {
        imgURL: "/images/homepage/wwaa-1.jpg",
        title: "WHAT WE DO",
        subText:
            "Being a non-profit organization, we offer Tibetan buddhist teachings and practices for monks and devotees."
    },
    {
        imgURL: "/images/homepage/wwaa-2.jpg",
        title: "OUR TEACHING",
        subText:
            "Our teachings are based off the practices of Drikung Kagyu- The Five-fold Profound Path of Mahamudrā and The Six Dharmas of Nāropa."
    },
    {
        imgURL: "/images/homepage/wwaa-3.jpg",
        title: "OUR PRESENCE",
        subText:
            "We are actively setting up new buddhist centres across Asia region with the aim of delivering quality Buddhism teachings."
    },
    {
        imgURL: "/images/homepage/wwaa-4.jpg",
        title: "OUR INITIATIVES",
        subText:
            "We are finding new ways to deliver more Buddhist teachings through next-generation technologies."
    }
];

const COUNT = [
    {
        number: "4",
        title: "BUDDHIST CENTRES"
    },
    {
        number: "250",
        title: "NUMBER OF LAMAS"
    },
    {
        number: "801",
        title: "YEARS OF TEACHING"
    },
    {
        number: "16020",
        title: "NUMBER OF GRADUATED SCHOLARS"
    }
];

const MEETUS = [
    {
        imgURL: "/images/homepage/muip-1.jpg",
        title: "WHAT WE DO",
        subText:
            "Our local tour would encompass some of the key highlights of the Tibetan Dharma practice, delivered face-to-face in your nearest Tibetan buddhist centres."
    },
    {
        imgURL: "/images/homepage/muip-2.jpg",
        title: "OUR PRACTICE",
        subText:
            "We conduct prayers, puja, meditation and advisory in both public and private setting."
    },
    {
        imgURL: "/images/homepage/muip-3.jpg",
        title: "OUR MISSION",
        subText:
            "We strive to share more Tibetan Buddhist practices through sharing of insights and experience."
    }
];

const Home: FC<{}> = () => {

    return (
        <DivHomeWrapper>
            <div className="section-card">
                <div className="container ">
                    <Row >
                        <Col span={24} className="section-title">

                            <h2>WHAT WE ARE ABOUT</h2>
                            <p>
                                Choeze Kuchen has been dedicating his life in disseminating Dharma
                                across the world.
                            </p>
                        </Col>
                        <Col span={24}>
                            <Row className="section-group">
                                {ABOUT.map(item => (
                                    <Col className="section-item" xs={24} sm={24} md={12} lg={6} xl={6}>
                                        <Card
                                            // style={{ width:  }}
                                            bordered={false}
                                            cover={<img src={item.imgURL} />}
                                        >
                                            <Meta title={item.title} description={item.subText} />
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="section-count">
                <div className="container ">
                    <Row >
                        {COUNT.map(item => (
                            <Col className="section-item" xs={24} sm={24} md={12} lg={6} xl={6}>
                                <span className="counter">{item.number}</span>
                                <p>{item.title}</p>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
            <div className="section-card">
                <div className="container ">
                    <Row className="section-card">
                        <Col span={24} className="section-title">
                            <h2>MEET US IN PERSON</h2>
                            <p>
                                Check out our scheduled tour to meet up with devotees. Contact your local centre representative for more information.
                            </p>
                        </Col>
                        <Col span={24}>
                            <Row className="section-group">
                                {MEETUS.map(item => (
                                    <Col className="section-item" xs={24} sm={24} md={12} lg={8} xl={8}>
                                        <Card
                                            // style={{ width:  }}
                                            bordered={false}
                                            cover={<img src={item.imgURL} />}
                                        >
                                            <Meta title={item.title} description={item.subText} />
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>

        </DivHomeWrapper>
    );
};

export default Home;
