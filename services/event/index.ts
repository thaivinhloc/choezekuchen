// @ts-nocheck
import {
  TEvent,
  TPageConfigurationAttributes,
  TRecordResponse,
  TSingleTypeResponse
} from "definition";
import client from "services/client";
import moment from "moment";

export const getEvents = ({ locale, page = 1, pageSize = 3, from, to, qs }) => {
  if (from && to) {
    return getEventsByTimeRange({ locale, from, to, qs });
  }
  const params = {
    "populate[0]": "image",
    "pagination[pageSize]": pageSize,
    "pagination[page]": page,
    locale: locale
  };
  if (qs) {
    params["filters[title][$containsi]"] = qs;
  }
  return client.createRequest<{
    data: TRecordResponse<TEvent>[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }>({
    path: `/api/events`,
    method: "get",
    external: true,
    params
  });
};

export const getEventsByCategory = ({
  locale,
  categoryId
}: {
  locale: string;
  categoryId: number;
}) => {
  return client.createRequest<{
    data: TRecordResponse<TEvent>[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }>({
    path: `/api/event-by-category`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "image",
      categoryId,
      locale: locale
    }
  });
};

export const getEventsByTimeRange = ({
  locale,
  from,
  to,
  qs
}: {
  locale: string;
  from: string;
  to: string;
  qs?: string;
}) => {
  const params = {
    "populate[0]": "image",
    from,
    to,
    locale: locale
  };
  if (qs) {
    params["filters[title][$containsi]"] = qs;
  }
  return client.createRequest<TEvent[]>({
    path: `/api/event-by-time-range`,
    method: "get",
    external: true,
    params
  });
};

export const getOneHighlightedEvent = ({ locale }: { locale: string }) => {
  return client.createRequest<{
    data: TRecordResponse<TEvent>[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }>({
    path: `/api/events`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "image",
      "pagination[pageSize]": 1,
      "pagination[page]": 1,
      "filters[isHighlightedEvent][$eq]": true,
      sort: "dateStart:desc",
      locale: locale
    }
  });
};

export const getEventsFrom = ({
  locale,
  from
}: {
  locale: string;
  from: string;
}) => {
  return client.createRequest<TEvent[]>({
    path: `/api/up-coming-events`,
    method: "get",
    external: true,
    params: {
      from,
      locale: locale,
      "populate[0]": "image"
    }
  });
};

export const getNextEventsFromNow = ({ locale }: { locale: string }) => {
  return client.createRequest<TEvent[]>({
    path: `/api/up-coming-events`,
    method: "get",
    external: true,
    params: {
      from: moment().toISOString(),
      locale: locale
    }
  });
};

export const getEventDetails = ({
  eid,
  locale
}: {
  eid: string | number;
  locale: string;
}) => {
  return client.createRequest<{
    data: {
      id: number;
      attributes: TEvent;
    };
  }>({
    path: `/api/events/${eid}`,
    method: "get",
    external: true,
    params: {
      locale,
      "populate[0]": "image",
      "populate[1]": "cover",
      "populate[2]": "banner",
      "populate[3]": "media"
    }
  });
};
