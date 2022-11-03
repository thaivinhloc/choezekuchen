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
