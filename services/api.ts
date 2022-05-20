import Client from "./client";

import {
  IResponseActiveRetreat,
  IResponseListRetreat,
  IResponseRetreatDetail,
  IResponseRetreatDetailById,
  TPostSubmitRetreat,
} from "./retreatTypes";

export const getListRetreat = async () => {
  return await Client.createRequest<IResponseActiveRetreat[]>({
    path: "/api/active-retreats?locale=en",
    method: "get",
    external: true,
  });
};
export const getRetreatDetailById = async (retreatId: number) => {
  return await Client.createRequest<IResponseRetreatDetailById>({
    path: `/api/active-retreats/${retreatId}`,
    method: "get",
    external: true,
  });
};

export const getRetreatDetail = async (retreatId: number) => {
  return await Client.createRequest<IResponseRetreatDetail>({
    path: `/api/retreat-detail/${retreatId}`,
    method: "get",
    external: false,
  });
};

export const getParticipants = async () => {
  return await Client.createRequest<IResponseListRetreat[]>({
    path: "/api/participants",
    method: "get",
    external: false,
  });
};

export const postRetreatRecitation = async (data: TPostSubmitRetreat) => {
  return await Client.createRequest({
    path: "/api/retreat-details",
    method: "post",
    body: data,
  });
};

export const getParticipantHistory = async (userId: number) => {
  return await Client.createRequest({
    path: `/api/participants/${userId}`,
    method: "get",
    external: false,
  });
};
