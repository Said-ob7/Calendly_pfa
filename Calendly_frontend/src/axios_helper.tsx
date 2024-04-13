import axios, { AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "http://localhost:8787";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const request = (method: string, url: string, data: any) => {
  const config: AxiosRequestConfig = {
    method: method,
    url: url,
    data: data,
  };
  return axios(config);
};
