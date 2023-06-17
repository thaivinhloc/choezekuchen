/* eslint-disable @next/next/no-img-element */
import { THEME } from "common";

export const TitleWithHeadline = ({
  title,
  headLine,
  color = THEME.primary
}: {
  title?: string;
  headLine?: any;
  color?: string;
}) => {
  return (
    <>
      {headLine && (
        <img
          style={{ width: "100%", maxWidth: 600, margin: "0 auto 12px" }}
          src={headLine.data?.attributes?.url}
        />
      )}
      {title && (
        <h2
          style={{
            color,
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
  );
};

export const TitleWithHeadlineSmall = ({
  title,
  headLine,
  color = THEME.primary
}: {
  title?: string;
  headLine?: any;
  color?: string;
}) => {
  return (
    <>
      {headLine && (
        <img
          style={{ width: "100%", maxWidth: 240, margin: "0 auto 12px" }}
          src={headLine.data?.attributes?.url}
          alt={headLine.data?.attributes?.name}
        />
      )}
      {title && (
        <h2
          style={{
            color,
            fontSize: 32,
            lineHeight: "36px",
            maxWidth: 500,
            margin: "0 auto 32px",
            letterSpacing: "1px"
          }}
        >
          {title}
        </h2>
      )}
    </>
  );
};

export default TitleWithHeadline;
