import { Scheduler } from "@aldabil/react-scheduler";
import { ProcessedEvent, ViewEvent } from "@aldabil/react-scheduler/types";
import { Popover } from "antd";
import { TEvent } from "definition";
import { Button } from "elements/Button";
import { GridMedia } from "elements/Media";
import { RichText } from "elements/RichText";
import { getEventPathFromSlug } from "helper";
import moment from "moment";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { getEventsByTimeRange } from "services/event";
import styled from "styled-components";

const EventWrapper = styled(Popover)`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #fff;
  background: ${(props) => props.theme.primary};
  padding: 10px;
  border-radius: 8px;
  h4 {
    color: #fff;
  }
`;

const EventPopContentWrapper = styled.div`
  width: 320px;
`;

function eventItemRenderer(event: any) {
  console.log({ event });
  const { id, image, content, description, dateEnd, dateStart, slug, title } =
    event;

  return (
    <EventWrapper
      placement='rightTop'
      zIndex={99999999}
      content={
        <EventPopContentWrapper>
          <GridMedia {...image} />
          <div>
            {moment(dateStart).format("DD/MM/YYYY")} -{" "}
            {moment(dateEnd).format("DD/MM/YYYY")}
          </div>
          <Link href={getEventPathFromSlug(id, slug)}>
            <h3 style={{ cursor: "pointer" }}>{title}</h3>
          </Link>
          <RichText content={description} />
        </EventPopContentWrapper>
      }
    >
      <Link href={getEventPathFromSlug(id, slug)}>
        <div style={{ height: "100%", cursor: "pointer" }}>
          <div
            style={{
              fontSize: "10px",
              marginBottom: 12
            }}
          >
            {moment(dateStart).format("HH:mm A")} -{" "}
            {moment(dateEnd).format("HH:mm A")}
          </div>
          <h4>{title}</h4>
        </div>
      </Link>
    </EventWrapper>
  );
}

const MonthEventWrapper = styled.div`
  .rs__outer_table {
    margin-top: 16px;
  }
  .rs__multi_day {
    .MuiButtonBase-root {
      background-color: ${(props) => props.theme.primary};
      h6,
      p {
        color: #fff !important;
      }
      h6 {
        font-size: 14px;
      }
    }
  }
`;

export function MonthEvent() {
  const router = useRouter();
  const { t } = useTranslation();
  function toCalendarEvents(evts: TEvent[]): ProcessedEvent[] {
    return evts.map((evt) => ({
      ...evt,
      title: evt.title ?? "",
      start: moment(evt.dateStart).toDate(),
      end: moment(evt.dateEnd).toDate(),
      event_id: evt.id,
      editable: false,
      draggable: false,
      deletable: false
    }));
  }

  const getRemoteEvents = async (query: ViewEvent) => {
    try {
      console.log(query);
      const { start, end } = query;
      const dateStart = moment(start).toISOString();
      const dateEnd = moment(end).toISOString();
      const events = await getEventsByTimeRange({
        from: dateStart,
        to: dateEnd,
        locale: router.locale ?? "en"
      });
      return toCalendarEvents(events);
    } catch (error) {
      return [];
    }
  };

  return (
    <MonthEventWrapper>
      <Scheduler
        deletable={false}
        draggable={false}
        editable={false}
        getRemoteEvents={getRemoteEvents}
        eventRenderer={eventItemRenderer}
        viewerTitleComponent={(event) => (
          <h3 style={{ color: "#fff" }}>{event.title}</h3>
        )}
        viewerExtraComponent={(fields, event) => (
          <div>
            <RichText content={event.description} />
            <div style={{ textAlign: "right" }}>
              <Button
                type='link'
                onClick={() =>
                  router.push(getEventPathFromSlug(event.id, event.slug))
                }
              >
                {t("View more")}
              </Button>
            </div>
          </div>
        )}
      />
    </MonthEventWrapper>
  );
}
