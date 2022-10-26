import { TListPage } from "definition"
import client from "services/client"

export const getPrayerPage = ({ locale }: { locale: string }) => {
  return client.createRequest<{ data: TListPage }>({
    path: `/api/prayer`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "dataList",
      "populate[1]": "dataList.media",
      "populate[2]": "dataList.cover",
      "populate[3]": "banner",
      locale: locale
    }
  })
}
