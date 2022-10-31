import { TListPage } from "definition"
import client from "services/client"

export const getAboutPage = ({ locale }: { locale: string }) => {
  return client.createRequest<{ data: TListPage }>({
    path: `/api/about`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "data",
      "populate[1]": "data.dataList",
      "populate[2]": "data.dataList.media",
      "populate[3]": "data.dataList.cover",
      "populate[4]": "data.banner",
      locale: locale
    }
  })
}
