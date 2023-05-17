import React, { ReactChild, ReactElement } from "react"

export type TPagination = {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export type TAttributesResponse<A> = {
  createdAt: string
  updatedAt: string
} & A

export type TSingleTypeResponse<A> = {
  id: number
  attributes: TAttributesResponse<A> & {
    data: TAttributesResponse<A>
  }
}

export type TMedia = {
  id: number
  attributes: TAttributesResponse<{
    name: string
    url: string
    ext: string
    width: number
    height: number
  }>
  url?: string
}

export enum EMediaType {
  FILE = "file",
  IMAGE = "image",
  AUDIO = "audio",
  VIDEO = "video"
}

export enum EListType {
  GRID = "GRID",
  REVERSE = "REVERSE",
  BLOG = "BLOG"
}

export interface ListItem {
  id: number
  title: string
  content?: string
  description?: string
  media: {
    data: TMedia
  }
  cover?: {
    data: TMedia
  }
  slug?: string
  category?: number
}

export interface CategoryItem {
  id: number
  name: string
  slug: string
}

export type MediaProps = {
  name?: string
  mediaData: TMedia
  cover?: TMedia
  ratioHeight?: number
  previewable?: boolean
  downloadable?: boolean
  ratio?: string
  width?: number
  height?: number
} & React.HTMLProps<HTMLDivElement>

export type TListPageAttributes = {
  title?: string
  section_title?: string
  description?: string
  dataList: ListItem[]
  listType: EListType
  listItemCount?: 1 | 2 | 3 | 4 | 5 | 6
  previewable?: boolean
  downloadable?: boolean
  meta?: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
  category?: ReactElement
  banner?: {
    data: TMedia
  }
  onRowClick?: ({ id, slug }: { id: number; slug: string }) => void
  mediaProps?: Partial<MediaProps>
  action_title?: string
  background?: string
}

export type TListPage = TSingleTypeResponse<TListPageAttributes>

export type TPageConfigurationAttributes = {
  title?: string
  banner?: {
    data: TMedia
  }
  background?: string
  action_title?: string
}

export type TRetreat = {
  id: number
  name: string
  totalCommitment: number
  dateStart?: string
  dateEnd?: string
  status: boolean
  description?: string
  image: TAttributesResponse<{
    id: number
    name: string
    url: string
    ext: string
    width: number
    height: number
  }>
  banner?: TAttributesResponse<{
    id: number
    name: string
    url: string
    ext: string
    width: number
    height: number
  }>
  isGroup?: boolean
  order?: number
  slug?: string
  locale?: string
}

export type TEvent = {
  id: number
  title?: string
  description?: string
  content?: string
  slug?: string
  dateStart: string
  dateEnd: string
  image: {
    data: TMedia
  }
  cover: {
    data: TMedia
  }
}

export type TEventCategory = {}

export type TRecordResponse<T> = {
  id: number
  attributes: TAttributesResponse<T>
}

enum ENavigatorItemType {
  INTERNAL = "INTERNAL",
  EXTERNAL = "EXTERNAL"
}

export type TNavigatorItem = {
  type: ENavigatorItemType
  path: string
  order: number
  related: {
    title: string
    slug: string
  }
  items: TNavigatorItem[]
}

export enum EPageType {
  SINGLE = "single",
  LIST = "list"
}

export enum EListPageLayout {
  VERTICAL_GRID = "VERTICAL_GRID",
  HORIZONTAL_GRID = "HORIZONTAL_GRID",
  REVERSE = "REVERSE",
  REVERSE_WITH_TITLE = "REVERSE_WITH_TITLE",
  BLOG = "BLOG",
  EVENT = "EVENT",
  LIBRARY = "LIBRARY",
  RETREAT = "RETREAT"
}

export enum ESinglePageLayout {
  HOME = "HOME",
  MONASTERY = "MONASTERY",
  DRIKUNG_KAGYU_LINEAGE = "DRIKUNG_KAGYU_LINEAGE",
  ABOUT = "ABOUT",
  TEACHING = "TEACHING",
  LIBRARY = "LIBRARY",
  RETREAT = "RETREAT",
  EVENT = "EVENT",
  OFFERING = "OFFERING"
}

type TContentListItem = {
  title?: string
  gridTitle?: string
  description?: string
  media: TAttributesResponse<{
    name: string
    url: string
    ext: string
  }>
  cover?: TAttributesResponse<{
    name: string
    url: string
    ext: string
  }>
  redirectPage?: TPage
  redirectTitle?: string
  redirectLink?: string
}

export type TPage = {
  id: number
  title: string
  topDesciption?: string
  slug: string
  background: string
  pageType: EPageType
  pageContent: string
  pageContentListLayout: EListPageLayout
  pageContentLayout: ESinglePageLayout
  topTitle?: string
  createdAt: string
  updatedAt: string
  pageContentEndpoint: string
  cover?: TAttributesResponse<{
    name: string
    url: string
    ext: string
    width: number
    height: number
  }>
  pageContentBanner?: TAttributesResponse<{
    id: number
    name: string
    url: string
    ext: string
    width: number
    height: number
  }>
  pageContentList?: TContentListItem[]
  locale?: string
}
