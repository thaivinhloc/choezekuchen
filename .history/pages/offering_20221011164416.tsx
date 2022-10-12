import React from "react";
import { Row, Col, Image } from "antd";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { ELanguages } from "i18n/config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function offering() {
  //   const { t } = i18next;
  const { t, i18n } = useTranslation(["content"]);

  return (
    <div className="container offering">
      <div className="hr bg-transparent"></div>
      <Row className="offering-group mb-5">
        <Col
          className="offering-wrapper"
          xs={24}
          sm={24}
          md={24}
          lg={16}
          xl={16}
        >
          <div>
            <h1>
              {t("Support the Activities of Samye Institute", {
                ns: "content",
              })}
            </h1>
            <div>
              <p>
                {t(
                  "In order to maintain our current activities, deliver our future roadmap and remain firm as the bedrock of our global sangha, Samye needs your ongoing support. We invite you to support Samye Institute in whatever way you prefer and be a direct cause for our activities to flourish and expand.",
                  {
                    ns: "content",
                  }
                )}
              </p>
              <p>
                {t(
                  "Samye Institute launched in 2015. Our worldwide volunteer team has helped us evolve into a hub for Phakchok Rinpoche’s vast teaching activities. Under Rinpoche and his senior instructors’ guidance our mission focuses on providing support for all those who wish to practice the Buddhadharma.",
                  {
                    ns: "content",
                  }
                )}
              </p>
              <p>
                {t(
                  "We welcome all offerings, regardless of the amount. Our wish is for every user to make an auspicious connection with Samye Institute.",
                  {
                    ns: "content",
                  }
                )}
              </p>
            </div>
          </div>
          <div className="mt-5">
            <h1>
              {t("Make an Offering by Credit Card or PayPal", {
                ns: "content",
              })}
            </h1>
            <div>
              <Row align="middle">
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                  <div className="card text-left ">
                    <img
                      className="card-img-top"
                      src="/images/offering/offerings_1.png"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {t("One-time Offering", {
                          ns: "content",
                        })}
                      </h4>
                      <p className="card-text">
                        {t(
                          "Use this form to make a one-time offering of any amount to support the mission and activities of Samye Institute.",
                          {
                            ns: "content",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                  <div className="card text-left">
                    <img
                      className="card-img-top"
                      src="/images/offering/offerings-2.png"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {t("Become a Supporting Member", {
                          ns: "content",
                        })}
                      </h4>
                      <p className="card-text">
                        {t(
                          "Become a supporting member by making a regular monthly offering to Samye Institute. Your offering supports Samye's mission to act as a hub for Phakchok Rinpoche's teaching activities.",
                          {
                            ns: "content",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row align="middle">
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                  <div className="card text-left">
                    <img
                      className="card-img-top"
                      src="/images/offering/offerings-3.jpg"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {t("Monk Sponsorship", {
                          ns: "content",
                        })}
                      </h4>
                      <p className="card-text">
                        {t(
                          "Help support our young monks living at the Do-Ngak Ling Monastery in Chapagaon, our artisan monks living at our Riwoche Monastery near Boudha, and our Tibetan medicine doctors and students…",
                          {
                            ns: "content",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                  <div className="card text-left">
                    <img
                      className="card-img-top"
                      src="/images/offering/offerings_4.png"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {t("Retreat Fund", {
                          ns: "content",
                        })}
                      </h4>
                      <p className="card-text">
                        {t("", {
                          ns: "content",
                        })}
                        We encourage all to share in the merit of financially
                        supporting practitioners in Tibet and Nepal chosen by
                        Phakchok Rinpoche to undertake intensive retreats.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row align="middle">
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                  <div className="card text-left">
                    <img
                      className="card-img-top"
                      src="/images/offering/offerings-5.jpg"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {t("", {
                          ns: "content",
                        })}
                        Offering to Phakchok Rinpoche
                      </h4>
                      <p className="card-text">
                        {t("", {
                          ns: "content",
                        })}
                        Use this form to make an offering to Phakchok Rinpoche
                        in support of his activities.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                  <div className="card text-left">
                    <img
                      className="card-img-top"
                      src="/images/offering/offerings-6.jpg"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {t("", {
                          ns: "content",
                        })}
                        Offerings for the Daily Lighting of 1,000 Butter Lamps
                        at Asura Cave
                      </h4>
                      <p className="card-text">
                        {t("", {
                          ns: "content",
                        })}
                        Use this form to make offerings for the daily lighting
                        of butter lamps at Asura Cave.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="updatePayment mt-5">
            <h1>
              {t("", {
                ns: "content",
              })}
              Update Payment Details
            </h1>
            <p>
              {t("", {
                ns: "content",
              })}
              To manage your recurring offerings, change your credit card
              information, and access your donation history, please click the
              button below.
            </p>
            <button className="payment">
              {t("", {
                ns: "content",
              })}
              View Offering Dashboard
            </button>
          </div>
          <div className="mt-5">
            <h1>
              {t("", {
                ns: "content",
              })}
              Offerings to Annual Pujas
            </h1>
            <p>
              {t("", {
                ns: "content",
              })}
              Each year, our monks at Do-ngak Nyida Zungdrel Sherab Raltri Ling
              Monastery, located approximately 45 minutes south of Kathmandu,
              perform pujas and practices on behalf of Phakchok Rinpoche and his
              students and benefactors. Rinpoche personally selects the pujas
              after consultation with divinations and the texts of many great
              masters.
            </p>
            <p>
              {t("", {
                ns: "content",
              })}
              We can participate in these pujas directly by attending the event,
              or we may choose to sponsor it with a financial offering. Both
              options help us to accumulate merit and bring great benefits for
              ourselves and others. When we support such practices, we prevent
              future obstacles from arising and help remove any current
              obstacles that we or our loved ones face.
            </p>
            <p>
              {t("", {
                ns: "content",
              })}
              To learn about upcoming pujas, and to make an offering, please
              click the button below.
            </p>
            <button className="payment">
              {t("", {
                ns: "content",
              })}
              Puja Schedule and Offerings
            </button>
          </div>
          <div className="my-5">
            <h2 style={{ fontWeight: "bold" }}>
              {t("", {
                ns: "content",
              })}
              Other Ways to Make an Offering
            </h2>
            <h2 style={{ fontWeight: "bold" }}>Check</h2>
            <p>
              {t("", {
                ns: "content",
              })}
              To donate by mail, please contact us for more information.
            </p>
            <h2 style={{ fontWeight: "bold" }}>
              {t("", {
                ns: "content",
              })}
              Wire Transfer
            </h2>
            <p>
              {t("", {
                ns: "content",
              })}
              To arrange a wire transfer, please contact us for more
              information.
            </p>
            <h2 style={{ fontWeight: "bold" }}>Donor-Advised Fund (DAF)</h2>
            <p>
              {t("", {
                ns: "content",
              })}
              If you currently have a donor-advised charity fund with Fidelity
              Charitable, we can assist you in directly transferring funds to
              Samye.
            </p>
            <p>
              {t("", {
                ns: "content",
              })}
              Please contact us for more information.
            </p>
            <h2 style={{ fontWeight: "bold" }}>
              {t("", {
                ns: "content",
              })}
              Give While You Shop
            </h2>
            <p>
              {t("", {
                ns: "content",
              })}
              You can turn every online purchase into a donation to support
              Samye with Amazon Smile.
            </p>
            <h2 style={{ fontWeight: "bold" }}>
              {t("", {
                ns: "content",
              })}
              Volunteer
            </h2>
            <p>
              {t("", {
                ns: "content",
              })}
              If you are interested in volunteering for Samye Institute, please
              click here.
            </p>
          </div>
          <div>
            <h3 style={{ fontWeight: "bold" }}>
              {t("offering", { ns: ["content"] })}
            </h3>
            <p>{t("contentOffering", { ns: ["content"] })}</p>
            <div>
              <p>
                {t(
                  "If you’d like to make an offering to Choeze Kuchen Rinpoche and Sangha, please contact us as below",
                  { ns: ["content"] }
                )}
                :
                <br />
                . 11th Choeze Kuchen Center (Singapore) <br />
                {t("Contact person", { ns: ["content"] })}: Ms. Mildred Yong{" "}
                <br />
                {t("Mobile", { ns: ["content"] })}: +6598358289
                <br />
                Email: dharmatreasure.sg@outlook.com
                <br /> wechat id: Mildred_Yong <br />
                . 11th Choeze Kuchen Drikung Wosal Ling Center (Viet Nam)
                <br /> {t("Contact person", { ns: ["content"] })}: Ms. Hoa
                Chokyi p Email: drikungwosalling@gmail.com
              </p>
            </div>
          </div>
        </Col>
        <Col
          className="offering-wrapper"
          xs={24}
          sm={24}
          md={24}
          lg={{ span: 7, offset: 1 }}
          xl={{ span: 7, offset: 1 }}
        >
          <Image src="/images/offering/logoOffering.png" alt="offering" />
          <h1>Help Us To:</h1>
          <ul>
            <li>
              Introduce more people to the Dharma and continue to offer most of
              our content for free to whoever it may benefit
            </li>
            <li>
              Invest in improvements and new features for all the websites in
              our mandala{" "}
            </li>
            <li>
              Maintain stable, predictable cash flow and support salaries for
              key current and future staff
            </li>
            <li>
              Develop our groups, centers, curriculums and instructor
              coordination{" "}
            </li>
            <li>Support student pathways such as Mahamudra and Ngondro </li>
            <li>Provide both technical and practice support for students </li>
            <li>
              Produce regular newsletters, wisdom blogs and social media
              outreach
            </li>
          </ul>
        </Col>
      </Row>
      {/* <Row className="chodChangbu-group" align="middle">
        <Col
          className="chodChangbu-wrapper"
          xs={24}
          sm={24}
          md={24}
          lg={{ span: 15, offset: 1 }}
          xl={{ span: 15, offset: 1 }}
        >
          <Image src="/images/offering/logoOffering.png" alt="offering" />
        </Col>
      </Row> */}
      <div className="hr bg-transparent"></div>
    </div>
  );
}
export async function getStaticProps({ locale }: { locale: ELanguages }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "header",
        "login",
        "content",
      ])),
    },
  };
}
