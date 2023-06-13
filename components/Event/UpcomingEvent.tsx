// @ts-nocheck
import { THEME } from "common";
import { GridMedia } from "elements/Media";
import { getEventPathFromSlug } from "helper";
import Link from "next/link";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { Button } from "elements/Button";
import { ArrowRightAlt } from "@mui/icons-material";

const EventItemWrapper = styled.div`
  padding: 24px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px,
    inset 0 0 0 1000px rgba(128, 0, 0, 0.8);
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  ${(props) =>
    props.background && `background-image: url(${props.background});`}
`;

export const UpcomingEventItem: React.FC = ({
  id,
  slug,
  title,
  cover,
  image,
  style = {}
}) => {
  const { t } = useTranslation();
  return (
    <EventItemWrapper background={cover?.url} style={style}>
      <Link href={getEventPathFromSlug(id, slug)}>
        <div
          style={{
            position: "relative",
            cursor: "pointer",
            height: "100%"
          }}
        >
          <div style={{ marginBottom: 24 }}>
            <GridMedia style={{ borderRadius: "8px" }} url={image.url} />
          </div>
          <Button
            type='primary'
            style={{
              background: THEME.white,
              color: THEME.primary,
              paddingLeft: 24,
              paddingRight: 24,
              border: 0,
              fontSize: 14
            }}
            shape='round'
            size='small'
          >
            {t("New Event!")}
          </Button>
          <h3
            style={{
              fontSize: 24,
              color: THEME.white,
              marginBottom: 40,
              textTransform: "uppercase"
            }}
          >
            {title}
          </h3>
          <Button
            block
            shape='round'
            ghost
            style={{
              border: "1px solid " + THEME.white,
              color: THEME.white,
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              bottom: 0
            }}
          >
            {t("See more")}
            <ArrowRightAlt style={{ color: THEME.white }} />
          </Button>
        </div>
      </Link>
    </EventItemWrapper>
  );
};
