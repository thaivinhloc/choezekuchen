import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";
import { onResponse, onResponseError } from "./interceptors";

const api = process.env.REACT_APP_API_URL;

export interface RequestDto {
  path: string;
  method: "get" | "delete" | "post" | "put" | "patch";
  body?: any;
  headers?: AxiosRequestHeaders;
  external?: boolean;
}

class Client {
  request: AxiosInstance;
  defaultHeaders: AxiosRequestHeaders;
  constructor() {
    this.defaultHeaders = {};
    this.request = axios.create({
      headers: this.defaultHeaders,
    });
    this.request.interceptors.response.use(onResponse, onResponseError);
  }

  private update(opt: Partial<AxiosRequestConfig>) {
    this.request = axios.create(opt);
    this.request.interceptors.response.use(onResponse, onResponseError);
  }

  private async addRequestHeaders(extendHeaders = {}) {
    const token = await this.getToken();
    if (token) {
      this.update({
        headers: {
          ...this.defaultHeaders,
          ...extendHeaders,
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }

  private removeRequestHeaders() {
    this.update(this.defaultHeaders);
  }

  private async getToken(): Promise<string> {
    let token = localStorage.getItem("token") || "";
    if (!token) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    // const now = moment.utc()
    // const tokenExpiredTime = Cookies.get(EXPIRED_TOKEN_KEY)
    // if (tokenExpiredTime) {
    //   const toNowSeconds = moment.utc(tokenExpiredTime).diff(now, "seconds")
    //   if (toNowSeconds - 10 < 0) {
    //     // Refresh before token expired 10s
    //     const { data, status } = await this.createRequest(refreshToken())
    //     if (status) {
    //       saveSession({ ...data })
    //       token = data.access_token
    //     }
    //   }
    // }

    return token;
  }

  public createRequest<T>(apiProps: RequestDto): Promise<T> {
    let {
      path,
      method = "get",
      body = {},
      external = false,
      headers,
    } = apiProps;
    return new Promise(async (resolve, reject) => {
      if (!path) {
        return reject(new Error("[Client] - Error: path is required"));
      }
      if (external) {
        this.removeRequestHeaders();
      } else {
        await this.addRequestHeaders(headers);
      }
      if (path[0] !== "/" && !path.includes("http")) {
        path = "/" + path;
      }
      path = path.includes("http") ? path : api + path;

      if (path.indexOf("?") !== -1) {
        path += "&_t=" + Date.now();
      } else {
        path += "?_t=" + Date.now();
      }

      this.request[method]<T, T>(path, body).then(resolve).catch(reject);
    });
  }
}

export default new Client();
