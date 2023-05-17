import { TAttributesResponse, TMedia } from "definition"
import client from "services/client"

export type THomePageResponse = {
  attributes: TAttributesResponse<{
    introduction: {
      title: string
      description: string
      contentList: {
        title: string
        description: string
        cover: {
          data: TMedia
        }
        redirectLink?: string
      }[]
      background?: {
        data: TMedia
      }
    }
    meetUsInPerson: {
      title: string
      description: string
      contentList: {
        title: string
        description: string
        redirectLink: string
        cover: {
          data: TMedia
        }
      }[]
      background?: {
        data: TMedia
      }
    }
    statistic: {
      title?: string
      banner?: {
        data: TMedia
      }
      contentList: {
        name: string
        value: string
        description?: string
      }[]
      background?: {
        data: TMedia
      }
    }
    monastery: {
      title?: string
      description?: string
      redirectTitle?: string
      redirectLink?: string
      contentList: {
        title: string
        cover: {
          data: TMedia
        }
        redirectLink?: string
      }[]
    }
  }>
}

export const getHomePage = ({ locale }: { locale: string }) => {
  return client.createRequest<{ data: THomePageResponse }>({
    path: `/api/home`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "introduction",
      "populate[1]": "statistic",
      "populate[2]": "meetUsInPerson",
      "populate[4]": "introduction.contentList",
      "populate[5]": "meetUsInPerson.contentList",
      "populate[6]": "meetUsInPerson.contentList.cover",
      "populate[7]": "introduction.contentList.cover",
      "populate[8]": "statistic.contentList",
      "populate[9]": "statistic.banner",
      "populate[10]": "monastery",
      "populate[11]": "monastery.contentList",
      "populate[12]": "monastery.contentList.cover",
      "populate[13]": "introduction.background",
      "populate[14]": "meetUsInPerson.background",
      "populate[15]": "statistic.background",
      "populate[16]": "offering",
      "populate[17]": "offering.background",
      locale: locale
    }
  })
}
