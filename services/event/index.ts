import { TEvent, TPageConfigurationAttributes, TRecordResponse, TSingleTypeResponse } from "definition"
import client from "services/client"

export const getEvents = ({ locale }: { locale: string }) => {
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
      locale: locale
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
  
