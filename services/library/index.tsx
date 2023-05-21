import { TListPage } from "definition"
import client from "services/client"

export const getNewReleaseMedias = ({ locale }: { locale: string }) => {
  return client.createRequest<{ data: TListPage }>({
    path: `/api/libraries`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "media",
      "populate[1]": "cover",
      locale: locale,
      sort: "createdAt:desc",
      "pagination[start]": 0,
      "pagination[limit]": 2
    }
  })
}

export const getAllMedias = ({ locale }: { locale: string }) => {
  return client.createRequest<{ data: TListPage }>({
    path: `/api/libraries`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "media",
      "populate[1]": "cover",
      locale: locale,
      sort: "createdAt:desc",
      "pagination[start]": 0,
      "pagination[limit]": 1000
    }
  })
}
