import { AxiosError, AxiosResponse } from "axios";

export const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};

export const onResponseError = (error: any): Promise<string> => {
  const statusCode = error.response?.data?.error?.status;

  if (statusCode === 401) {
    localStorage.clear();
    window.location.href = "/login";
  }

  return Promise.reject(
    error.response?.data?.error?.message ||
      error.message ||
      error.name ||
      "Unexpected Error"
  );
};
