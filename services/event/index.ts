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
      "populate[0]": "image"
    }
  })
}

export const getEventPage = ({ locale }: { locale: string }) => {
  return client.createRequest<{
    data: TSingleTypeResponse<TPageConfigurationAttributes>
  }>({
    path: `/api/event-configuration`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "banner",
      locale: locale
    }
  })
}
