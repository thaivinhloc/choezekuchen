import {
  TPageConfigurationAttributes,
  TRetreat,
  TSingleTypeResponse
} from "definition"
import client from "services/client"

export const getRetreatPage = ({ locale }: { locale: string }) => {
  return client.createRequest<{
    data: TSingleTypeResponse<TPageConfigurationAttributes>
  }>({
    path: `/api/retreat-configuration`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "banner",
      locale: locale
    }
  })
}

export const getChildRetreats = ({
  parentId,
  locale
}: {
  locale: string
  parentId: number
}) => {
  return client.createRequest<{ retreats: TRetreat[]; parent: TRetreat }>({
    path: `/api/child-retreats`,
    method: "get",
    external: true,
    params: {
      locale: locale,
      parentId
    }
  })
}

export const getParentRetreats = ({ locale }: { locale: string }) => {
  return client.createRequest<TRetreat[]>({
    path: `/api/parent-retreats`,
    method: "get",
    external: true,
    params: {
      locale: locale
    }
  })
}
