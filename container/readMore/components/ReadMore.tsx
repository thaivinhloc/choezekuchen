import { THEME } from "common";
import { RichText } from "elements/RichText";
import React, { FC, useState } from "react";

type TReadMore = {
  text: string;
  charLimit?: number;
  ellipsis?: string;
  scrollHeight?: number;
};
const ReadMoreReact: FC<TReadMore> = ({
  text = "",
  charLimit = 300,
  ellipsis = "...",
  scrollHeight
}) => {
  const [showMore, setShowMore] = useState(false);
  const shortText =
    text
      .substr(0, charLimit)
      .replace(/[\s\n]+$/, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]+$/, "") +
    (charLimit >= text.length ? "" : ellipsis);
  const ReadMore = () =>
    charLimit >= text.length ? null : (
      <span
        className={"ant-btn-link"}
        role="presentation"
        onClick={() => {
          setShowMore(true);
        }}
      >
        {"Read more"}
      </span>
    );
  const ReadLess = () =>
    charLimit >= text.length ? null : (
      <span
        className={"ant-btn-link"}
        role="presentation"
        onClick={() => {
          setShowMore(false);
        }}
      >
        {"Read less"}
      </span>
    );
  return (
    <div
      style={{
        height: scrollHeight || "auto",
        overflow: "auto"
      }}
    >
      {showMore ? (
        <RichText
          color={THEME.dark}
          content={text}
          style={{ overflow: "auto" }}
        />
      ) : (
        <RichText
          color={THEME.dark}
          content={shortText}
          style={{ overflow: "auto" }}
        />
      )}{" "}
      {showMore ? <ReadLess /> : <ReadMore />}
    </div>
  );
};

export default ReadMoreReact;
