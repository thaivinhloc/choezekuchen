import {
  TEvent,
  TPageConfigurationAttributes,
  TRecordResponse,
  TSingleTypeResponse
} from "definition";
import client from "services/client";

export const getTeachingContent = ({
  locale,
  page = 1,
  pageSize = 100
}: {
  locale: string;
  page?: number;
  pageSize?: number;
}) => {
  return client.createRequest<{
    data: TRecordResponse<TEvent>[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }>({
    path: `/api/teaching-content`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "socialMedia",
      "populate[1]": "socialMedia.image",
      "pagination[pageSize]": pageSize,
      "pagination[page]": page,
      locale: locale
    }
  });
};

export const getListTeaching = ({
  locale,
  page = 1,
  pageSize = 100,
  filter = {}
}: {
  locale: string;
  page?: number;
  pageSize?: number;
  filter?: Record<string, any>;
}) => {
  return client.createRequest<{
    data: TRecordResponse<TEvent>[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }>({
    path: `/api/teachings`,
    method: "get",
    external: true,
    params: {
      "populate[0]": "cover",
      "populate[1]": "thumbnail",
      "pagination[pageSize]": pageSize,
      "pagination[page]": page,
      locale: locale
    }
  });
};

export const getTeachingDetails = ({
  id,
  locale
}: {
  id: string | number;
  locale: string;
}) => {
  return client.createRequest<{
    data: {
      id: number;
      attributes: Record<string, any>[];
    };
  }>({
    path: `/api/teachings/${id}`,
    method: "get",
    external: true,
    params: {
      locale,
      "populate[0]": "cover",
      "populate[1]": "images",
      "populate[2]": "videos",
      "populate[3]": "background",
      "populate[4]": "images2"
    }
  });
};
