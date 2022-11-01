import React, { ReactChild, ReactElement } from "react"

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
  }>
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
  }>
  banner?: TAttributesResponse<{
    id: number
    name: string
    url: string
    ext: string
  }>
  isGroup?: boolean
  order?: number
  slug?: string
}
