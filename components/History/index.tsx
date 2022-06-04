/* eslint-disable @next/next/no-img-element */
import { DivHistory } from "./index.style";
import { Row, Col, Button } from "antd";

import React, { useEffect, useState } from "react";

const History: React.FC<{}> = () => {
  return (
    <DivHistory>
      <div className="history">
        <div className="container">
          <Row>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              className="history-image"
            >
              <img
                src="/images/aboutrinpoche/aboutrinpoche1.jpg"
                alt="aaa"
                className="history-image"
              />
            </Col>
            <Col
              className="history-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
            >
              <p>
                Choeze Kuchen Rinpoche is the founder of Choeze Thupten
                Dhargyeling Monastery located in the eastern part of Tibet in
                Kham under the Yushu, Qinghai Province, China. Choeze Monastery
                in Kham was founded by the 8th incarnation of Choeze Kuchen
                Rinpoche, also known as Choeze Denma Shathri Tulku almost 500
                years ago. He is regarded as the manifestation of Yamantaka (a
                wrathful aspect of Manjushri).
              </p>
              <p>
                The 1st Choeze Kuchen Rinpoche, known as Palchen Nyedphupa, is
                one of the eight Heart Sons (bhulhob) of the founder of Drikung
                Kyagud sect and great enlightened being, Lord Kyopa Jigten
                Sumgon, who lived almost 800 years ago. He was bestowed the
                title “Pal” by Kyopa Jigten Sumgon. According to the records of
                biographies of Choeze Kuchen Rinpoche, it was written that after
                the Parinirvana of Lord Kyopa Jigten Sumgon, Palchen Nyedphupa
                flew from Drikung region of Tibet to Kham Denkhog. He mediated
                at a cave in Denkhog and many followers gathered for teachings.
                It is written that he also established a monastery in Denkhog.
              </p>
              <p>
                Later, one of the reincarnations, Choeze Denma Shathri (it is
                said that Rinpoche rode a stag from Denkhog to Dzachukha along
                Dza river. The stag was killed for his meat and it is said that
                Rinpoche assembled the skin and bones of the stag and brought
                the stag back to life) established the Choeze Thupten Dargyeling
                Monastery, which then served as the main seat for later
                reincarnations of Choeze Kuchen Rinpoche.
              </p>
            </Col>
          </Row>
          <div className="history-hr"></div>
          <Row className="history-group">
            <Col
              className="history-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
            >
              <p>
                In one of his previous lives, he was born as a bright Brahmin
                named Salwa (Prabha) during the times of Buddha Dipankara. In
                the 7th century, during the time of Dharma King Songtsen Gampo,
                he took rebirth as Thonmi Sambhota who went to India and studied
                under the great scholar Lekchin Kara and introduced Tibetan
                script and Buddhism into Tibet. He has also reincarnated before
                as Nged-Phupa, a great master of Mahamudra during the time of
                Kyobpa Jigten Sumgon.
              </p>
              <p>
                The present incarnation of Choeze Kuchen Rinpoche has achieved
                immense knowledge and wisdom at a very young age. He has
                undergone seven years of study of Buddhist philosophy and
                Drikung Kagyudpa teachings at the Thupten Shedup Jangchupling in
                south India. He has also received many precepts, oral
                transmissions and initiations from H.H. Drikung Kyabgon Chetsang
                Rinpoche and Phowa Teachings from H.E. Ayang Rinpoche.
              </p>
              <p></p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
              className="history-image"
            >
              <img
                src="/images/aboutrinpoche/aboutrinpoche2.jpg"
                alt="aaa"
                className="history-image"
              />
            </Col>
          </Row>
        </div>
      </div>

      {/* ================= MOTIVATION ================  */}
      <div className="motivation">
        <div className="container">
          <Row className="motivation-group">
            <Col
              className="motivation-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={16}
              xl={16}
            >
              <p>
                Pure motivation and great conviction are very important
                regardless of whether the activity performed is great or
                negligible. Pure motivation is what results in great merit.
              </p>
              <p>
                Impure motivation is having jealousy, greed, desire of
                benefitting oneself or one’s family and other negative and
                selfish thoughts before performing the deed. Pure motivation is
                doing the virtuous deed without any prior negative and selfish
                thoughts.
              </p>
              <p>
                1. The shepherd lets the herd go in front and will count all the
                animals in the herd to ensure none of the animals are missing.{" "}
                <br />
                The motivation like that of the shepherd is to lead all sentient
                beings to enlightenment before one attains enlightenment.
              </p>
              <p>
                2. The boatman ensures all the travellers in his boat reach
                safely to the other shore together with him. <br />
                The motivation like that of the boatman is to attain
                enlightenment together with all sentient beings at the same
                time.
              </p>
              <p>
                3. The king cultivates himself and takes measures to put himself
                in a position to lead his country before actually doing
                something for his country to make the country strong and make
                his citizens contented.
              </p>
              <p>
                4. The motivation like that of the king is to become enlightened
                first before leading others towards enlightenment.
              </p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 7, offset: 1 }}
              xl={{ span: 7, offset: 1 }}
              className="motivation-item"
            >
              <h2>
                IF YOU HAVE IMPURE MOTIVATION, ON THE OUTSIDE THE DEED YOU
                PERFORM MAY LOOK GOOD, BUT THE RESULT WILL BE NEGATIVE AS THE
                DEED IS UNVIRTUOUS DUE TO IMPURE MOTIVATION.
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
                WHEN TRYING TO CURE PATIENTS, THE PATIENTS OF THE DOCTOR WITH
                THE PURE MOTIVATION WOULD BE THE ONES WHO SEE BETTER RESULTS AS
                THE DOCTOR WOULD PUT IN MUCH MORE EFFORT IN CURING AND CARING
                FOR THE PATIENT.
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
                The best motivation is that of the shepherd. Some may think, “If
                I lead others, then what about myself?” That is an unnecessary
                worry. If you have already lead others towards enlightenment, it
                is impossible that you alone would stay in samsara by yourself.
                Why we remain in samsara is due to our selfishness. Buddhas and
                Bodhisattvas always do things for others and do not care for
                themselves. Actually, if you have the motivation of the
                shepherd, you would probably gain enlightenment much faster than
                if you had the other two motivations.
              </p>
              <p>
                As a vajrayana practitioner, we should have the motivation of a
                shepherd. Before we perform any deeds, we should consider if our
                motivaion is pure or impure. At that instant, if you find that
                your motivation is impure, you should change it to be a pure
                one. You must constantly perform the checking yourself. It is
                easy to check our mind as it belongs to us and nobody else. The
                real practice is to check our mind frequently.
              </p>
              <p>
                Pure motivation is very important especially to those who are in
                a profession where they directly help others, such as doctors
                and teachers. They must have pure motivation in order to help
                much more people effectively and efficiently. Take for example 2
                doctors, one who has good qualifications but not genuinely
                concerned about helping others and one who does not have good
                qualifications but has the pure motivation to benefit others.
                When trying to cure patients, the patients of the doctor with
                the pure motivation would be the ones who see better results as
                the doctor would put in much more effort in curing and caring
                for the patient. With pure motivation, one will benefit more
                people better and at a faster speed. This is especially true for
                teachers and doctors who are in a profession where they can help
                many directly.
              </p>
              <p>
                If you have impure motivation, on the outside the deed you
                perform may look good, but the result will be negative as the
                deed is unvirtuous due to impure motivation. If you light just
                one small lamp with pure motivation, the merit would last much
                longer than performing a great deed with impure motivation. The
                best motivation to have is that of the shepherd man.
              </p>
            </Col>
          </Row>

          <div className="motivation-hr"></div>

          <Row className="motivation-group">
            <Col
              className="motivation-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={16}
              xl={16}
            >
              <p>
                Pure motivation can be applied to whatever activity you perform,
                regardless if it is related to Dharma. Slowly we start this
                practice and with experience, the pure motivation would come
                easily. We have to change our bad habits which are due to
                ignorance. Through countless lifetimes, we have accumulated much
                negative karma, we must have the patience to slowly change
                ourselves. It will not be easy, but with time, we can make the
                change.
              </p>
              <p>
                For lay people, especially businessmen, it is very difficult to
                have pure motivation when working. They feel that they have to
                tell lies or their business will not be so good. But you can
                still try to do business with a good motivation. How to do so?
                For example, before starting on a deal, think that whatever
                profit I get, I will donate 40% to charity and for the rest, I
                will keep for myself and my family. If you do this, then it is
                ok. It may even make your business more successful as you had
                kind intentions before starting out on the deals. Even if you
                can’t give 40%, even 5% is good, as long as you have thought of
                benefitting others, and not just only yourself.
              </p>
              <p>
                We have to try to think for others, not just ourselves. If you
                think for others, you will become very relaxed in your mind. If
                you only think for yourself, gradually you will develop stress
                and feel more pressure. So try to think of benefitting others.
                Even though you can’t benefit masses, if there is just only one
                person in front of you who needs help and you have given
                assistance with pure motivation, it would make you happy and
                your mind relaxed.
              </p>
              <p>
                Wealth, good facilities, infrastructure and material goods,
                these give us good health and comfort, but not true permanent
                happiness. That is why you can observe that there are rich
                people who are very stressed. Poor people may have to live in
                discomfort, but they may not be unhappy if they are contented
                and do not harbor selfish thoughts. Material wealth may cause
                one more suffering due to the grasping and attachment one has
                for it.
              </p>
              <p>
                Past Buddhas, Bodhisattvas and great masters took refuge in the
                Buddha, Dharma and Sangha, they did not take refuge in material
                wealth! Material wealth only gives you temporary happiness. We
                all need material wealth to survive, but we should not put in
                extra effort just to gain material wealth. Take for example a
                diamond ring, we wipe it and make it shiny, we carry it around
                with us, tell it that we love it very much and show it off
                proudly to others, but the diamond ring cannot reciprocate our
                love or do anything for us, it may even make us feel
                uncomfortable having to wear it on our finger. So it only makes
                us look stupid that we spend so much time and attention on an
                object that cannot love or care. That is what attachment does to
                us.
              </p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 7, offset: 1 }}
              xl={{ span: 7, offset: 1 }}
              className="motivation-item"
            >
              <h2>
                WEALTH, GOOD FACILITIES, INFRASTRUCTURE AND MATERIAL GOODS,
                THESE GIVE US GOOD HEALTH AND COMFORT, BUT NOT TRUE PERMANENT
                HAPPINESS. MATERIAL WEALTH MAY CAUSE ONE MORE SUFFERING DUE TO
                THE GRASPING AND ATTACHMENT ONE HAS FOR IT.
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
                WE ALL NEED MATERIAL WEALTH TO SURVIVE, BUT WE SHOULD NOT PUT IN
                EXTRA EFFORT JUST TO GAIN MATERIAL WEALTH. IT ONLY MAKES US LOOK
                STUPID THAT WE SPEND SO MUCH TIME AND ATTENTION ON AN OBJECT
                THAT CANNOT LOVE OR CARE. THAT IS WHAT ATTACHMENT DOES TO US.
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
                Past Buddhas, Bodhisattvas and great masters took refuge in the
                Buddha, Dharma and Sangha, they did not take refuge in material
                wealth! Material wealth only gives you temporary happiness. We
                all need material wealth to survive, but we should not put in
                extra effort just to gain material wealth. Take for example a
                diamond ring, we wipe it and make it shiny, we carry it around
                with us, tell it that we love it very much and show it off
                proudly to others, but the diamond ring cannot reciprocate our
                love or do anything for us, it may even make us feel
                uncomfortable having to wear it on our finger. So it only makes
                us look stupid that we spend so much time and attention on an
                object that cannot love or care. That is what attachment does to
                us.
              </p>
              <p>
                Motivation is important, like when parents discipline their
                children, from the outside, it looks bad, but actually the
                parents only want the best for their children. Their motivation
                is pure. We should not only focus on appearances, it is the
                motivation that counts.
              </p>
              <p>
                There is a story, a few centuries ago, about the Jowo statue in
                Tibet which is very precious. A king during Buddha’s time
                requested that the statue be made and invited a statue maker
                from the deva realms. The statue was invited from India to China
                and then to Tibet. In Tibet there is a saying that if you do not
                visit the Jowo statue, then your life has been a waste. People
                put in great effort to go and visit the Jowo statue. There was a
                man from the southern side of Tibet who was simple-minded. He
                saw the shrine and thought that the offerings were food for
                Jowo. He thought that the lamp was lit up to ensure that the
                butter did not harden in the cold weather. As he was hungry, he
                took the torma (food offering) and dipped it into the butter and
                ate it. When he looked at Jowo’s face, it was still smiling and
                he thought that Jowo was so nice as he was happy to share his
                food. He then told Jowo that he will now circumambulate him and
                put his shoes in front of Jowo and asked Jowo to help take care
                of them. When the caretaker of the temple came, he was very
                upset as he saw that the shrine was ruined and someone has
                disrespectfully put his shoes in front of the Buddha statue. He
                wanted to throw the shoes out, but the Jowo statue spoke and
                said, “Do not throw them away. Gonpo Ben has asked me to take
                care of them, it is my duty to do so.” When Gonpo Ben has
                finished his circumambulation, he thanked the Jowo statue and
                invited Jowo to his home. Jowo accepted the invitation. Gonpo
                Ben then went home to tell his wife that Jowo would be visiting
                them.
              </p>
              <p>
                One day when his wife went to the river to get water, she saw
                that the Jowo statue was inside the river. She ran back to tell
                Ben who went to the river and dived in to fetch the statue. He
                actually managed to get the statue out. When he reached a stone
                on the road however, Jowo told him that he cannot enter a lay
                person’s house and disappeared inside the rock. Ben had very
                pure motivation and therefore managed to see, talk to and even
                touch a real Buddha. Even though his actions appeared
                disrespectful, it did not matter as he had pure motivation.
              </p>
            </Col>
          </Row>
          <div className="motivation-hr"></div>
        </div>
      </div>
    </DivHistory>
  );
};

export default History;
