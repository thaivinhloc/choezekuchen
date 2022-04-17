import Client from "./Client";

import {
  IResponseListRetreat,
  IResponseRetreat,
  TPostSubmitRetreat,
} from "./retreatTypes";

export const getRetreatDetail = async (isHasToken = true) => {
  return await Client.createRequest<IResponseRetreat>({
    path: "/api/active-retreat-detail",
    method: "get",
    external: isHasToken,
  });
};

export const getListRetreat = async () => {
  return await Client.createRequest<IResponseListRetreat[]>({
    path: "/api/active-retreat-detail/participants",
    method: "get",
  });
};

export const postRetreatRecitation = async (data: TPostSubmitRetreat) => {
  return await Client.createRequest({
    path: "/api/retreat-details",
    method: "post",
    body: data,
  });
};
