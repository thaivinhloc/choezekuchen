import { TLanguage } from "components/Retreat/hooks/useRetreat"
import Client from "./client"

import {
  IResponseActiveRetreat,
  IResponseListRetreat,
  IResponseRetreatDetail,
  IResponseRetreatDetailById,
  TPostSubmitRetreat
} from "./retreatTypes"

export const getListRetreat = async (locale: string = "en") => {
  return await Client.createRequest<IResponseActiveRetreat[]>({
    path: `/api/active-retreats?locale=${locale}`,
    method: "get",
    external: true
  })
}
export const getRetreatDetailById = async (retreatId: number) => {
  return await Client.createRequest<IResponseRetreatDetailById>({
    path: `/api/active-retreats/${retreatId}`,
    method: "get",
    external: true
  })
}

export const getRetreatDetail = async (retreatId: number, locale: string) => {
  const isPublic = !!localStorage.getItem("token")
  return await Client.createRequest<IResponseRetreatDetail>({
    path: `/api/retreat-detail/${retreatId}?locale=${locale}`,
    method: "get",
    external: !isPublic,
    params: {
      "populate[0]": "cover"
    }
  })
}

export const getParticipants = async ({
  parentId,
  locale
}: {
  parentId: number
  locale: string
}) => {
  return await Client.createRequest<IResponseListRetreat[]>({
    path: "/api/participants",
    method: "get",
    external: false,
    params: {
      parentId,
      locale
    }
  })
}

export const postRetreatRecitation = async (data: TPostSubmitRetreat) => {
  return await Client.createRequest({
    path: "/api/retreat-details",
    method: "post",
    body: data
  })
}

export const postRetreatUser = async (data: {
  committed: number
  user: number
  retreat: number
}) => {
  return await Client.createRequest({
    path: "/api/retreat-users",
    method: "post",
    body: {
      data
    }
  })
}

export const getParticipantHistory = async (
  userId: number,
  retreatParentId: number,
  locale: any
) => {
  console.log("-----------------------------", { userId, retreatParentId })
  return await Client.createRequest<any[]>({
    path: `/api/participants/${userId}`,
    method: "get",
    external: false,
    params: {
      retreatParentId,
      locale: locale || "en"
    }
  })
}
