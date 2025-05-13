import {
  TEvent,
  TPageConfigurationAttributes,
  TRecordResponse,
  TSingleTypeResponse
} from "definition"
import client from "services/client"

export const getMonasteries = ({
  locale,
  page = 1,
  pageSize = 100,
  filter = {}
}: {
  locale: string
  page?: number
  pageSize?: number
  filter?: Record<string, any>
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
    path: `/api/monasteries`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "cover",
      "pagination[pageSize]": pageSize,
      "pagination[page]": page,
      locale: locale,
      sort: "order:asc",
      ...filter
    }
  })
}

export const getMonasteryDetails = ({
  id,
  locale
}: {
  id: string | number
  locale: string
}) => {
  return client.createRequest<{
    data: {
      id: number
      attributes: Record<string, any>[]
    }
  }>({
    path: `/api/monasteries/${id}`,
    method: "get",
    external: true,
    params: {
      locale,
      "populate[0]": "cover",
      "populate[1]": "images",
      "populate[2]": "videos",
      "populate[3]": "background",
      "populate[4]": "address_pin"
    }
  })
}
