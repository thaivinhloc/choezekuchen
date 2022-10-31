import React from "react"
import { useTranslation } from "react-i18next"
import { DivAboutRinppche } from "./index.style"
import { Row, Col, Button, Image } from "antd"
import { ButtonStyle } from "components/Button/ButtonStyle"
import { TListPage } from "definition"
import { RichText } from "elements/RichText"
import ListLayout from "container/ListLayout"

const AboutRinpoche = ({ id, attributes }: TListPage) => {
  const { section_title, description } = attributes
  console.log({ attributes })

  return (
    <DivAboutRinppche>
      <div className='about'>
        <div className='container'>
          <div
            className='about-title d-flex justify-center'
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <h2>{section_title}</h2>
            <RichText
              content={description}
              style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}
            />
          </div>
          <div className='mt-5 mb-5'>
            <ListLayout {...attributes} />
          </div>
        </div>
      </div>
    </DivAboutRinppche>
  )
}

export default AboutRinpoche
