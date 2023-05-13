import {
  TEvent,
  TPageConfigurationAttributes,
  TRecordResponse,
  TSingleTypeResponse
} from "definition"
import client from "services/client"

export const getEvents = ({
  locale,
  page = 1,
  pageSize = 3
}: {
  locale: string
  page: number
  pageSize: number
}) => {
  return client.createRequest<{
    data: TRecordResponse<TEvent>[]
    meta: {
      pagination: {
        page: number
        pageSize: number
        pageCount: number
        total: number
      }
    }
  }>({
    path: `/api/events`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "image",
      "pagination[pageSize]": pageSize,
      "pagination[page]": page,
      locale: locale
    }
  })
}

export const getEventsByCategory = ({
  locale,
  categoryId
}: {
  locale: string
  categoryId: number
}) => {
  return client.createRequest<{
    data: TRecordResponse<TEvent>[]
    meta: {
      pagination: {
        page: number
        pageSize: number
        pageCount: number
        total: number
      }
    }
  }>({
    path: `/api/event-by-category`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "image",
      categoryId,
      locale: locale
    }
  })
}

export const getEventsByTimeRange = ({
  locale,
  from,
  to
}: {
  locale: string
  from: string
  to: string
}) => {
  return client.createRequest<TEvent[]>({
    path: `/api/event-by-time-range`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "image",
      from,
      to,
      locale: locale
    }
  })
}

export const getEventsFrom = ({
  locale,
  from
}: {
  locale: string
  from: string
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
  })
}

export const getEventDetails = ({
  eid,
  locale
}: {
  eid: string | number
  locale: string
}) => {
  return client.createRequest<{
    data: {
      id: number
      attributes: TEvent
    }
  }>({
    path: `/api/events/${eid}`,
    method: "get",
    external: true,
    params: {
      locale,
      "populate[0]": "image",
      "populate[1]": "cover"
    }
  })
}
