import { TEvent, TPagination } from "definition"
import { useState } from "react"
import { getEvents } from "services/event"

type TPageProps = {
  locale?: string
  page?: number
  pageSize?: number
}

function useEvents({ locale, page = 1, pageSize = 3 }: TPageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [events, setEvents] = useState<{
    data: {
      id: number
      attributes: TEvent
    }[]
    meta: {
      pagination: TPagination
    }
  }>()

  async function getEventList() {
    try {
      setIsLoading(true)
      const res = await getEvents({ locale: locale ?? "en", page, pageSize })
      // @ts-ignore
      setEvents(res)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }
  return {
    isLoading,
    events,
    getEventList
  }
}

export default useEvents
