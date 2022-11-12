import { EListPageLayout, TPage } from "definition"

function VerticalGrid({ ...props }: TPage) {
  return <div></div>
}

function HorizontalGrid({ ...props }: TPage) {
  return <div></div>
}

function ReverseGrid({ ...props }: TPage) {
  return <div></div>
}

function BlogGrid({ ...props }: TPage) {
  return <div></div>
}

function EventGrid({ ...props }: TPage) {
  return <div></div>
}

function LibraryGrid({ ...props }: TPage) {
  return <div></div>
}

export function ListPageLayout({
  type,
  data
}: {
  type: EListPageLayout
  data: TPage
}) {
  console.log("ListPageLayout", { type, data })
  switch (type) {
    case EListPageLayout.VERTICAL_GRID:
      return <VerticalGrid {...data} />
    case EListPageLayout.HORIZONTAL_GRID:
      return <HorizontalGrid {...data} />
    case EListPageLayout.BLOG:
      return <BlogGrid {...data} />
    case EListPageLayout.EVENT:
      return <EventGrid {...data} />
    case EListPageLayout.LIBRARY:
      return <LibraryGrid {...data} />
    default:
      return <ReverseGrid {...data} />
  }
}
