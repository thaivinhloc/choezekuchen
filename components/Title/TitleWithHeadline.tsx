import { THEME } from "common"

export const TitleWithHeadline = ({
  title,
  headLine
}: {
  title?: string
  headLine?: any
}) => {
  return (
    <>
      {headLine && (
        <img
          style={{ width: "100%", maxWidth: 600, margin: "0 auto 24px" }}
          src={headLine.data?.attributes?.url}
        />
      )}
      {title && (
        <h2
          style={{
            color: THEME.primary,
            fontSize: 32,
            lineHeight: "36px",
            marginTop: 0,
            marginBottom: 32
          }}
        >
          {title}
        </h2>
      )}
    </>
  )
}
