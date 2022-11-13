import { TAttributesResponse } from "definition"
import { useState } from "react"
import client from "services/client"

type TPageProps = {
  locale?: string
  endpoint: string
  params?: Record<string, any>
}

type TPageContentRes<T> = {
  data: {
    id: number
    attributes: TAttributesResponse<T>
  }
  meta: Record<string, any>
}

function usePage<T>({ locale, endpoint, params = {} }: TPageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [content, setContent] = useState<TPageContentRes<T>>()

  async function getPageContent() {
    try {
      setIsLoading(true)
      const res = await client.createRequest<TPageContentRes<T>>({
        method: "get",
        external: true,
        path: `/api${endpoint}`,
        params: {
          locale,
          ...params
        }
      })
      // @ts-ignore
      setContent(res)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }
  return {
    isLoading,
    content,
    getPageContent
  }
}

export default usePage
