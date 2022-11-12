import { ESinglePageLayout, TPage } from "definition"

function Vertical({ ...props }: TPage) {
  return <div></div>
}

function Horizontal({ ...props }: TPage) {
  return <div></div>
}

function Home({ ...props }: TPage) {
  return <div></div>
}

function Gurus({ ...props }: TPage) {
  return <div></div>
}

function Monastery({ ...props }: TPage) {
  return <div></div>
}

export function SinglePageLayout({
  type,
  data
}: {
  type: ESinglePageLayout
  data: TPage
}) {
  console.log("SinglePageLayout", { type, data })
  switch (type) {
    case ESinglePageLayout.HORIZONTAL:
      return <Horizontal {...data} />
    case ESinglePageLayout.VERTICAL:
      return <Vertical {...data} />
    case ESinglePageLayout.HOME:
      return <Home {...data} />
    case ESinglePageLayout.GURUS:
      return <Gurus {...data} />
    case ESinglePageLayout.MONASTERY:
      return <Monastery {...data} />
    default:
      return <Horizontal {...data} />
  }
}
