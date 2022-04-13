import { AxiosError, AxiosResponse } from "axios";

export const onResponse = (response: AxiosResponse): any => {
  return response.data;
};

export const onResponseError = (error: AxiosError): Promise<string> => {
  return Promise.reject(
    error.response?.data?.error?.message ||
      error.message ||
      error.name ||
      "Unexpected Error"
  );
};
