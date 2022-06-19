import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { DEFAULT_ZIPPOPOTAM_URL } from "../../utils/constants";

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
  "X-Requested-With": "XMLHttpRequest",
};

class ZippopotamClient {

  private static instance: AxiosInstance;

  private constructor() { }

  static getInstance(): AxiosInstance {
    if (!ZippopotamClient.instance) {
      ZippopotamClient.instance = axios.create({
        baseURL: process.env.ZIPPOPOTAM_ENDPOINT ?? DEFAULT_ZIPPOPOTAM_URL,
        headers,
      });
    }

    return ZippopotamClient.instance;
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return ZippopotamClient.instance.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return ZippopotamClient.instance.get<T, R>(url, config);
  }

}

export const zippopotamClient = ZippopotamClient.getInstance();
