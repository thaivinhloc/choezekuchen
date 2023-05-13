import { ListItem, TEvent, TRetreat } from "definition"

export * from "./strapi"

export const formatNumber = (num: number) => {
  return num
    .toString()
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const retreatRegex = /^([a-z0-9-\/]*)-r([0-9]*).html$/
const eventRegex = /^([a-z0-9-\/]*)-e([0-9]*).html$/
const blogRegex = /^([a-z0-9-\/]*)-b([0-9]*).html$/
const monasteryRegex = /^([a-z0-9-\/]*)-m([0-9]*).html$/

export const getPathType = (path: string) => {
  if (retreatRegex.test(path)) {
    return "retreat"
  }
  if (eventRegex.test(path)) {
    return "event"
  }
  if (blogRegex.test(path)) {
    return "blog"
  }
  if (monasteryRegex.test(path)) {
    return "monastery"
  }

  return ""
}

export const isValidPath = (path: string) => {
  return (
    retreatRegex.test(path) ||
    eventRegex.test(path) ||
    blogRegex.test(path) ||
    monasteryRegex.test(path)
  )
}

export const getRetreatPathFromSlug = (id: number, slug = ""): string => {
  return `/${slug || ""}-r${id}.html`
}

export const getEventPathFromSlug = (id: number, slug = ""): string => {
  if (slug.startsWith("/")) {
    slug = slug.slice(1)
  }
  return `/${slug || ""}-e${id}.html`
}

export const getMonasteryPathFromSlug = (id: number, slug = ""): string => {
  if (slug.startsWith("/")) {
    slug = slug.slice(1)
  }
  return `/${slug || ""}-m${id}.html`
}

export const getBlogPathFromSlug = (id: number, slug = ""): string => {
  return `/${slug || ""}-b${id}.html`
}

export const getSlugFromPath = (pathname: string) => {
  if (!isValidPath(pathname)) {
    return undefined
  }
  let pathSegments = pathname.split("-")
  let lastSegment = pathSegments?.[pathSegments.length - 1]
  let endIndex = pathname.indexOf(lastSegment) - 1
  return pathname.slice(0, endIndex < 0 ? 0 : endIndex)
}

export const getIdFromPath = (path: string) => {
  if (!isValidPath(path)) {
    return undefined
  }
  let pathSegments = path.split("-")
  let lastSegment = pathSegments?.[pathSegments.length - 1]
  return parseInt(lastSegment?.split(".")[0]?.substring(1))
}

export const transformRetreatToListItem = (retreat: TRetreat): ListItem => {
  return {
    title: retreat.name,
    description: retreat.description,
    media: {
      data: {
        attributes: retreat.image ?? {},
        id: retreat.image?.id
      }
    },
    slug: retreat.slug,
    id: retreat.id
  }
}

export const transformEventToListItem = (event: TEvent): ListItem => {
  return {
    title: event.title ?? "",
    description: event.description,
    media: event.image,
    slug: event.slug,
    id: event.id
  }
}
