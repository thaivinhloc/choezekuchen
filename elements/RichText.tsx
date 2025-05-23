import { THEME } from "common"
import HtmlParser from "html-react-parser"
import styled from "styled-components"

interface RichTextProps extends React.HTMLProps<HTMLDivElement> {
  content?: string
  className?: string
  align?: string
  fontSize?: string
  color?: string
  lineHeight?: string
  fontWeight?: string
  letterSpacing?: string
}

const RichTextWrapper = styled.div<RichTextProps>`
  img {
    width: 100% !important;
    height: auto;
    max-height: 700px !important;
    object-fit: contain;
  }
  div,
  span,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b,
  strong,
  i {
    font-family: ${(props) => props.theme.primaryFont} !important;
    background: transparent !important;
    line-height: ${props => props.lineHeight ?? parseInt(props.fontSize ?? "") + 8 + "px"} +  '!important';
    ${({ align }) => `text-align: ${align} !important;`}
    ${(props) => props.fontSize && `font-size: ${props.fontSize} !important;`}
    ${(props) =>
      props.fontWeight && `font-weight: ${props.fontWeight} !important;`}
    ${(props) => props.color && `color: ${props.color} !important;`}
    ${(props) =>
      props.letterSpacing &&
      `letter-spacing: ${props.letterSpacing} !important;`}
  }
`

export const RichText: React.FC<RichTextProps> = ({
  content,
  className,
  style,
  align,
  fontSize = "16px",
  lineHeight,
  fontWeight,
  letterSpacing,
  color = THEME.dark
}) => (
  <RichTextWrapper
    className={className}
    style={style}
    align={align}
    fontSize={fontSize}
    lineHeight={lineHeight}
    fontWeight={fontWeight}
    letterSpacing={letterSpacing}
    color={color}
  >
    {content ? HtmlParser(content) : null}
  </RichTextWrapper>
)
