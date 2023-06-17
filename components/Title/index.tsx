import { THEME } from "common";

export enum TITLE_SIZES {
  MEDIUM,
  LARGE
}

const supSizes = (isMobile = false) => {
  return {
    [TITLE_SIZES.LARGE]: isMobile
      ? {
          fontSize: 28,
          lineHeight: "36px"
        }
      : { fontSize: 48, lineHeight: "60px" },
    [TITLE_SIZES.MEDIUM]: isMobile
      ? {
          fontSize: 20,
          lineHeight: "24px"
        }
      : { fontSize: 32, lineHeight: "36px" }
  };
};

const titleSizes = (isMobile = false) => {
  return {
    [TITLE_SIZES.LARGE]: isMobile
      ? { fontSize: 48, lineHeight: "48px" }
      : { fontSize: 80, lineHeight: "80px" },
    [TITLE_SIZES.MEDIUM]: isMobile
      ? { fontSize: 28, lineHeight: "32px" }
      : { fontSize: 48, lineHeight: "54px" }
  };
};

export const Title = ({
  title = "",
  supTitle = "",
  isMobile = false,
  size = TITLE_SIZES.MEDIUM,
  color = THEME.primary,
  isSecondaryFont = false,
  styleSubTitle = {}
}) => {
  const subTitleStyle = supSizes(isMobile)[size];
  const titleStyle = titleSizes(isMobile)[size];
  return (
    <>
      <strong
        className={isSecondaryFont ? "tx-secondary" : ""}
        style={{
          display: "block",
          color,
          fontWeight: 500,
          ...subTitleStyle,
          ...styleSubTitle
        }}
      >
        {supTitle}
      </strong>
      <h2
        style={{
          color,
          marginBottom: 12,
          fontWeight: "bolder",
          ...titleStyle
        }}
      >
        {title}
      </h2>
    </>
  );
};
