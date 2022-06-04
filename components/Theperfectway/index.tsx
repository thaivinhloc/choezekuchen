import { DivTheperfectway } from "./index.style";
import { Row, Col, Button, Image } from "antd";

import React, { useEffect, useState } from "react";

const Theperfectway: React.FC<{}> = () => {
  return (
    <DivTheperfectway>
      <div className="theperfectway">
        <div className="container">
          <Row className="theperfectway-group">
            <Col
              className="theperfectway-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={16}
              xl={16}
            >
              <p>
                All types of Buddhist practice are included within the Vajrayana
                way of practice, the creation and completion stages. The
                generation stage practice is to do visualization. We visualize
                our body as a form of wisdom body or that of a deity. We also
                visualize Samantabhadra’s form of offerings to Buddhas and
                Bodhisattvas of the 10 directions.
              </p>
              <p>
                If visualization is done with concentration, it brings the same
                benefit as doing Shamatha (stabilization/ concentration)
                meditation. It is very important to visualize one-pointedly in
                the generation stage. For the beginner, it is very very
                difficult, one needs time to gain experience. We must practice
                more often. An obstacle is having an active mind during
                visualization, thinking about other things. This is an evil
                during visualization. We must have a stable mind during
                visualization and meditation, we should not think of the past or
                future, but remain in the present.
              </p>
              <p>
                During meditation you should not feel heavy in the mind like
                when we are sleeping but feel very light. There is a method to
                go to this state of mind. Many practitioners practice for a long
                time without getting a sign of successful practice. Some of them
                then think that there is a problem with the practice or that
                there is a problem with their guru. But actually the problem is
                with themselves! If one has wandering thoughts during
                visualization, one will not obtain any results as one is not
                practising correctly and in the proper way.
              </p>
              <p>
                During visualization and meditation, worldly and conceptual
                thoughts that come are the real evil. They are the biggest
                obstacle. We have to put in effort to resolve this problem. We
                cannot forcefully stop the thoughts from coming as it would make
                the situation worse. More thoughts would come, and if you get
                angry, that is very bad. When thoughts come, just do not follow
                them, release the thoughts naturally. Come to the natural state
                of your mind. Do not think of the past or future, stay in the
                present. Conceptual thoughts will then be released naturally. We
                have to try this everyday, at times of trouble etc., try to
                release the tension in our minds through this method.
              </p>
              <p>
                With attachment, our mind becomes heavy. Be light in your mind
                without any attachment. We cannot possibly stop our mind from
                thinking, simply do not follow thoughts and just release. If we
                do this more often, it will help us during the introduction to
                the true nature of phenomena. When there is strong anger,
                hatred, desire or ignorance, practise this method to release
                your mind from negativity and conceptual thoughts. When
                meditating, open your eyes and look at any object in front of
                you, but do not grasp onto the object. Have no conceptions.
                There is only this one method and there are no other ways.
              </p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 7, offset: 1 }}
              xl={{ span: 7, offset: 1 }}
              className="theperfectway-item"
            >
              <h2>
                IF ONE HAS WANDERING THOUGHTS DURING VISUALIZATION, ONE WILL NOT
                OBTAIN ANY RESULTS AS ONE IS NOT PRACTISING CORRECTLY AND IN THE
                PROPER WAY. DURING VISUALIZATION AND MEDITATION, WORLDLY AND
                CONCEPTUAL THOUGHTS THAT COME ARE THE REAL EVIL.
              </h2>
            </Col>
          </Row>
          <div className="motivation-hr"></div>
          <Row>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={7}
              xl={7}
              className="motivation-item"
            >
              <h2>
                RELEASE ALL THOUGHTS AND BE WITHOUT CONCEPTIONS WHEN YOU
                VISUALIZE OR MEDITATE.
              </h2>
            </Col>
            <Col
              className="motivation-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 16, offset: 1 }}
              xl={{ span: 16, offset: 1 }}
            >
              <p>
                Through this practice, one will obtain long life. Breathing will
                slow down and become relaxed. Your life will go at a slower
                speed. This is different from when one is angry, the breath is
                fast and labored. Breathing will be long and smooth during
                practice and this will cause your life to become long. This
                practice can be done anywhere. Most importantly, release all
                thoughts and be without conceptions when you visualize or
                meditate. This will be the prefect way to practice.
              </p>
              <p>
                In a lifetime, we must recognize the true nature of our mind
                after receiving instructions from a great master. There are a
                lot of conditions which must be met before we can do this. The 4
                foundations (Ngondro) is important as a precursor to all
                practices.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </DivTheperfectway>
  );
};

export default Theperfectway;
