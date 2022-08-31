import { DivAchi } from "./index.style";
import { Row, Col, Image } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Achi: React.FC<{}> = () => {
  return (
    <DivAchi>
      <div className="achi">
        <div className="container">
          <Row>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={122}
              className="achi-image"
            >
              <Image src="/images/achi/achi1.jpg" alt="2" />
            </Col>
            <Col
              className="achi-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
            >
              <p>
                <strong>
                  MONTHLY ACHI CHOKYI DROLMA TEACHING & PRACTICING
                </strong>
                <br />
                <strong> HIS EMINENCE 11TH CHOEZE KUCHEN RINPOCHE</strong>
              </p>
              <br />
              <p>
                Achi Chokyi Drolma – The main Dharma Protector of Drikung Kagyu
                Mother Achi was the great grandmother of Lord Jigton Sumgon,
                founder of the Drikung Lineage.{" "}
              </p>
              <p>
                To this day she remains a great dharma protector of the Buddha’s
                teachings. As a protector, Achi is visualized on her blue wisdom
                horse to symbolize the swiftness of her enlightened activities,
                and she holds a wish-fulfilling jewel to symbolize her ability
                to bestow everything needed and desired when asked. Benefits of
                practicing Achi Chokyi Drolma are the removal of inner and outer
                obstacles to our practices and to lay the groundworks for
                circumstances best suited to our progress along the path. Those
                who practice her meditation and recite her mantra will be
                protected from obstacles and hindrances.
              </p>
              <br />
              <p>
                Welcome to 11th Choeze Kuchen Rinpoche’s official website and
                Facebook at:{" "}
              </p>
              <p>
                – Website
                <Link
                  href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkIyZXhlYi1aTFlvblBPQWE
                tV2F1NlBSUWlvQXxBQ3Jtc0treGtfc3BaQ3ZuampTellTdWJhSTdkdzUwSVVHaEE5am1PWWF5X01VU2FMajZKWXEwVnhSeDhubEdXSjBjS2V4SEVqV
                VFiS0FXd0RuZ3MxN1RoRzRaZFE1cWRpc0FjQWNIMEg2OEFkQnlpRXNILVhuNA&q=https%3A%2F%2Fchoezekuchen.com%2F&v=M9KmuAeA4rY"
                >
                  : https://choezekuchen.com/
                </Link>
              </p>

              <p>
                – Facebook
                <Link
                  href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa0pXcXpRQWpWejZrZjh0NENQbWZ
                abFFzOU9nd3xBQ3Jtc0ttSWxKVFFjNUw2TXQwcFFQczRONFRRY1hDVmtJNVc4TzVfYU1fZFRaVWZGOU91Z1lsSTNnOEdfd3I3aHdhNnhfSWRfN1RmSFJGek9
                DS1JUTWdlLXllSEU0aVdFRzR1eHFMRkxULTFHcDhDems1di1zUQ&q=https%3A%2F%2Fwww.facebook.com%2Fchoezekuchen&v=M9KmuAeA4rY"
                >
                  : https://www.facebook.com/choezekuchen
                </Link>
              </p>
              <p>
                – Facebook
                <Link
                  href="https://www.youtube.com/redirect?event=video_description&redi
                r_token=QUFFLUhqbjl4V2VDWWVLZUlEUk9UNUNDUHBiM0I0YTh4UXxBQ3Jtc0ttSFd5VGhqX1dSa
                FFsVERDTlo4ZFY2eGt2WXNRSzF2TTR3TXlKX2htNXJzZU5GMmVzblo2LXJxMkFuRG5ZSEpaQmZ0cT
                BHQkF1OWkxN1plS1gwWFA4SG1jZng5WTVKZkRXbmtqaHdTVWtNelhjbjFpSQ&q=https%3A%2F%2Fww
                w.facebook.com%2Fprofile.php%3Fid%3D100063772682683&v=M9KmuAeA4rY"
                >
                  : https://www.facebook.com/profile.php?…
                </Link>
              </p>
              <p>
                – Subscribe to our YouTube channel:
                <Link href="https://www.youtube.com/channel/UCTQ-MTMv9wNvW4GSChlX0lw">
                  : https://www.youtube.com/channel/UCTQ-…
                </Link>
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </DivAchi>
  );
};

export default Achi;
