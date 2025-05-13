// @ts-nocheck
import { THEME } from "common"
import {
  TitleWithHeadline,
  TitleWithHeadlineSmall
} from "components/Title/TitleWithHeadline"
import { RichText } from "elements/RichText"
import styled from "styled-components"

const SingleSectionWrapper = styled.section`
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 992px) {
    max-width: 960px;
    margin: 0 auto;
  }
  // @media (min-width: 1200px) {
  //   max-width: 1170px;
  //   margin: 0 auto;
  // }
  // @media (min-width: 1400px) {
  //   width: 1340px;
  //   max-width: 100%;
  // }
`

export const SingleSection = ({ title, headLine, content }) => {
  return (
    <SingleSectionWrapper>
      <TitleWithHeadline title={title} headLine={headLine} />
      <RichText align='center' content={content} fontSize='20px' />
    </SingleSectionWrapper>
  )
}

export const SingleSectionSmall = ({ title, headLine, content }) => {
  return (
    <SingleSectionWrapper>
      <TitleWithHeadlineSmall title={title} headLine={headLine} />
      <RichText align='center' content={content} fontSize='20px' />
    </SingleSectionWrapper>
  )
}

export default SingleSection
