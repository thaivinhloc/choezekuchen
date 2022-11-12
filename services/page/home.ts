import { TListPage } from "definition"
import client from "services/client"

export const getHomePage = ({ locale }: { locale: string }) => {
  return client.createRequest<{ data: Record<string, any> }>({
    path: `/api/home`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "introduction",
      "populate[1]": "statistics",
      "populate[2]": "meetUsInPerson",
      "populate[3]": "contactUs",
      locale: locale
    }
  })
}
