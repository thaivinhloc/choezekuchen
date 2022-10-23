import React, { ReactChild, ReactElement } from "react"

export type TAttributesResponse<A> = {
  createdAt: string
  updatedAt: string
} & A

export type TSingleTypeResponse<A> = {
  id: number
  attributes: TAttributesResponse<A>
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
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
  title: string
  content?: string
  description?: string
  media: {
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

export type TListPageAttributes = {
  title?: string
  description?: string
  dataList: ListItem[]
  listType: EListType
  listItemCount?: 1 | 2 | 3 | 4 | 5 | 6
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
  category?: ReactElement
}

export type TListPage = TSingleTypeResponse<TListPageAttributes>
