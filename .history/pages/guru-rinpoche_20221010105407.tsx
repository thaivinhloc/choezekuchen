import React from "react";
import { Row, Col, Button, Image } from "antd";

export default function guruRinpoche() {
  return (
    <div className="guruRinpoche">
      <div className="container">
        <div className="hr bg-transparent" />
        <Row align="middle">
          <Col
            xs={24}
            sm={24}
            md={24}
            xl={12}
            lg={12}
            className="guruRinpoche-image"
          >
            <Image
              src="/images/guru-Rinpoche/guruRinpoche.png"
              alt="bb"
              className="guruRinpoche-image"
            />
          </Col>
          <Col
            className="guruRinpoche-wrapper"
            xs={24}
            sm={24}
            md={24}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
          >
            <h3>
              DRIKUNG KAGYU NGONDRO PRELIMINARY PRACTICES CONDUCTED BY HIS
              EMINENCE 11TH CHOEZE KUCHEN RINPOCHE
            </h3>
            <p>
              On the 10th day of the month of the Pig, Guru Padmasambhava
              transformed the poison concocted by the Tirthikas into nectar with
              his magical powers. His healthy radiance transformed the mind of
              the Tirtikas and converted them and their retinues to the Dharma.
            </p>
            <p>
              He became known as Guru Nyima Ozer or Suryaprabha, the Guru who is
              like rays of the sun. On the Anniversary of Guru Nyima Ozer, one
              of Guru Padmasambhava’s manifestations, we are pleased to announce
              the online teaching and prayers of Guru Rinpoche, conducted by
              11th Choeze Kuchen Rinpoche
            </p>
            <p>
              Welcome to 11th Choeze Kuchen Rinpoche’s official website and
              Facebook at: – Website:
              <a
                class="yt-simple-endpoint style-scope yt-formatted-string"
                dir="auto"
                spellcheck="false"
                href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbkIyZXhlYi1aTFlvblBPQWEtV2F1NlBSUWlvQXxBQ3Jtc0treGtfc3BaQ3ZuampTellTdWJhSTdkdzUwSVVHaEE5am1PWWF5X01VU2FMajZKWXEwVnhSeDhubEdXSjBjS2V4SEVqVVFiS0FXd0RuZ3MxN1RoRzRaZFE1cWRpc0FjQWNIMEg2OEFkQnlpRXNILVhuNA&amp;q=https%3A%2F%2Fchoezekuchen.com%2F&amp;v=M9KmuAeA4rY"
                target="_blank"
                rel="nofollow noopener"
              >
                https://choezekuchen.com/
              </a>
              – Facebook: https://www.facebook.com/choezekuchen – Facebook:
              https://www.facebook.com/profile.php?… – Subscribe to our YouTube
              channel: https://www.youtube.com/channel/UCTQ-…
            </p>
          </Col>
        </Row>
        <div className="hr bg-transparent" />
      </div>
    </div>
  );
}
