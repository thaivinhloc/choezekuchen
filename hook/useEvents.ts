import { TEvent, TPagination } from "definition"
import { useState } from "react"
import { getEvents, getEventsByTimeRange, getEventsFrom } from "services/event"

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

  const [eventsCalendar, setEventsCalendar] = useState<TEvent[]>([])
  const [upcomingEvents, setUpcomingEvents] = useState<TEvent[]>([])

  async function getEventsCalendar({ from, to }: { from: string; to: string }) {
    try {
      const res = await getEventsByTimeRange({
        locale: locale ?? "en",
        from,
        to
      })
      setEventsCalendar(res)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }

  async function getUpcomingEvents({ from }: { from: string; }) {
    try {
      const res = await getEventsFrom({
        locale: locale ?? "en",
        from,
      })
      setUpcomingEvents(res)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }

  async function getEventList() {
    try {
      setIsLoading(true)
      const res = await getEvents({ locale: locale ?? "en", page, pageSize })
      // const res_1 = await getEventsByCategory({
      //   locale: locale ?? "en",
      //   categoryId: 1
      // })
      // const res_2 = await getEventsByTimeRange({
      //   locale: locale ?? "en",
      //   from: moment().startOf("month").toISOString(),
      //   to: moment().endOf("month").toISOString()
      // })
      // console.log({
      //   res_1,
      //   res_2
      // })

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
    eventsCalendar,
    getEventList,
    getEventsCalendar,
    upcomingEvents,
    getUpcomingEvents
  }
}

export default useEvents
