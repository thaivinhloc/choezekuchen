// @ts-nocheck
import moment from "moment"
import React, { useEffect, useState } from "react"
import Scheduler, {
  SchedulerData,
  ViewTypes
} from "lib/react-big-scheduler/lib"
import { useTranslation } from "next-i18next"
import styled from "styled-components"
import withDnDContext from "lib/react-big-scheduler/lib/withDnDContext"

let resources = [
  {
    id: 1,
    name: ""
  }
]

let events = [
  {
    id: 1,
    start: "2022-12-18 09:30:00",
    end: "2022-12-19 23:30:00",
    title: "I am finished",
    bgColor: "#D9D9D9",
    resourceId: 1
  },
  {
    id: 2,
    start: "2022-12-18 12:30:00",
    end: "2022-12-26 23:30:00",
    title: "I am not resizable",
    resourceId: 1
  },
  {
    id: 3,
    start: "2022-12-19 12:30:00",
    end: "2022-12-20 23:30:00",
    title: "I am not movable",
    resourceId: 1
  },
  {
    id: 4,
    start: "2022-12-19 14:30:00",
    end: "2022-12-20 23:30:00",
    title: "I am not start-resizable",
    resourceId: 1
  },
  {
    id: 5,
    start: "2022-12-19 15:30:00",
    end: "2022-12-20 23:30:00",
    title: "R2 has recurring tasks every week on Tuesday, FresourceIday",
    bgColor: "#f759ab",
    resourceId: 1
  }
]

const EventSchedulerWrapper = styled.div`
  #RBS-Scheduler-root {
    width: 100%;
  }
  scheduler-bg-table {
    th, td {
      width: auto !important;
    }
  }
`

const EventScheduler = () => {
  const { t } = useTranslation()
  const [schedulerDataState, setSchedulerData] = useState(
    new SchedulerData(
      moment("2022-12-19", "YYYY-MM-DD").format("YYYY-MM-DD"),
      ViewTypes.Day,
      false,
      false,
      {
        startResizable: false,
        endResizable: false,
        movable: false,
        creatable: false,
        views: [
          {
            viewName: t("Day"),
            viewType: ViewTypes.Day
          },
          {
            viewName: t("Week"),
            viewType: ViewTypes.Week
          }
        ],
        dayStartFrom: 8,
        dayStopTo: 23,
        nonAgendaDayCellHeaderFormat: "hh:mm A",
        dayCellWidth: 8,
        nonWorkingTimeHeadBgColor: null,
        eventItemHeight: 100,
        eventItemLineHeight: 100,
        headerEnabled: false,
        scrollToSpecialMomentEnabled: false
        // relativeMove: true
      }
    )
  )

  useEffect(() => {
    const schedulerData = schedulerDataState
    schedulerData.setResources(resources)
    schedulerData.setEvents(events)
    setSchedulerData(schedulerData)
  }, [])

  const prevClick = (schedulerData) => {
    schedulerData.prev()
    schedulerData.setEvents(events)
    setSchedulerData(schedulerData)
  }
  const nextClick = (schedulerData) => {
    schedulerData.next()
    schedulerData.setEvents(events)
    setSchedulerData(schedulerData)
  }
  const onViewChange = (schedulerData, view) => {
    console.log({ schedulerData })
    schedulerData.setViewType(
      view.viewType,
      view.showAgenda,
      view.isEventPerspective
    )
    schedulerData.setEvents(events)
    setSchedulerData(schedulerData)
  }

  const eventClicked = (schedulerData, event) => {
    alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`)
  }

  const onSelectDate = (schedulerData, date) => {
    console.log({ schedulerData })
    schedulerData.setDate(date)
    setSchedulerData(schedulerData)
  }

  const toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId)
    setSchedulerData(schedulerData)
  }

  console.log({ schedulerDataState })

  return (
    <EventSchedulerWrapper>
      {typeof window != "undefined" && (
        <Scheduler
          schedulerData={schedulerDataState}
          prevClick={prevClick}
          nextClick={nextClick}
          onSelectDate={onSelectDate}
          onViewChange={onViewChange}
          eventItemClick={eventClicked}
          toggleExpandFunc={toggleExpandFunc}
        />
      )}
    </EventSchedulerWrapper>
  )
}

export default withDnDContext(EventScheduler)
