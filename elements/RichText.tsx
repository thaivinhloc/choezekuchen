import HtmlParser from "html-react-parser"

type RichTextProps = {
  content?: string
  className?: string
}

export const RichText: React.FC<RichTextProps> = ({ content, className }) => {
  return <div className={className}>{content ? HtmlParser(content) : null}</div>
}
