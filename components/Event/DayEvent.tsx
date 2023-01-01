import { GridMedia, Media } from "elements/Media"
import { RichText } from "elements/RichText"
import { getEventPathFromSlug } from "helper"
import useEvents from "hook/useEvents"
import moment from "moment"
import { useRouter } from "next/router"
import { useEffect } from "react"

export function DayEvent({ dateStart }: { dateStart: string }) {
  const router = useRouter()
  const { eventsCalendar, getEventsCalendar } = useEvents({
    locale: router.locale ?? "en"
  })
  useEffect(() => {
    if (dateStart) {
      const dateEnd = moment(dateStart).endOf("day").toISOString()
      getEventsCalendar({ from: dateStart, to: dateEnd })
    }
  }, [dateStart])

  const onEventClick = ({ id, slug }: { id: number; slug: string }) => {
    router.push(getEventPathFromSlug(id, slug))
  }

  return (
    <div>
      {eventsCalendar.map((event) => (
        <div
          onClick={() => onEventClick({ id: event.id, slug: event.slug ?? "" })}
        >
          <h2>{event.title}</h2>
          <GridMedia {...event.image.data} />
          <RichText content={event.description} />
        </div>
      ))}
    </div>
  )
}
