import HtmlParser from "html-react-parser"
import styled from "styled-components"

interface RichTextProps extends React.HTMLProps<HTMLDivElement> {
  content?: string
  className?: string
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
    color: ${(props) => props.style?.color ?? "inherit"} !important;
    font-size: ${(props) => props.style?.fontSize ?? "inherit"} !important;
    line-height: ${(props) => props.style?.lineHeight ?? "inherit"} !important;
    font-weight: ${(props) => props.style?.fontWeight ?? "inherit"} !important;
    letter-spacing: ${(props) =>
      props.style?.letterSpacing ?? "inherit"} !important;
  }
`

export const RichText: React.FC<RichTextProps> = ({
  content,
  className,
  style
}) => (
  <RichTextWrapper className={className} style={style}>
    {content ? HtmlParser(content) : null}
  </RichTextWrapper>
)
