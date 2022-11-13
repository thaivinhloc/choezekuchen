import { TAttributesResponse, TMedia } from "definition"
import client from "services/client"

export type THomePageResponse = {
  attributes: TAttributesResponse<{
    contactUs: {
      title: string
      description: string
      contentList: {
        title: string
        description: string
      }[]
    }
    introduction: {
      title: string
      description: string
      contentList: {
        title: string
        description: string
        cover: {
          data: TMedia
        }
      }[]
    }
    meetUsInPerson: {
      title: string
      description: string
      contentList: {
        title: string
        description: string
        cover: {
          data: TMedia
        }
      }[]
    }
    statistics: {
      name: string
      value: string
    }[]
  }>
}

export const getHomePage = ({ locale }: { locale: string }) => {
  return client.createRequest<{ data: THomePageResponse }>({
    path: `/api/home`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "introduction",
      "populate[1]": "statistics",
      "populate[2]": "meetUsInPerson",
      "populate[3]": "contactUs",
      "populate[4]": "introduction.contentList",
      "populate[5]": "meetUsInPerson.contentList",
      "populate[6]": "contactUs.contentList",
      "populate[7]": "contactUs.contentList",
      "populate[8]": "meetUsInPerson.contentList.cover",
      "populate[9]": "introduction.contentList.cover",
      locale: locale
    }
  })
}
