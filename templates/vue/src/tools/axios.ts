import type { AxiosRequestConfig } from 'axios';
import Axios from 'axios';

const baseURL = new URL(import.meta.env.VITE_API_URL);
baseURL.pathname = '/api/v3';

const axiosInstance = Axios.create({
  baseURL: baseURL.href,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((conf) => {
  return conf;
});

axiosInstance.interceptors.response.use((resp) => {
  return resp;
});

export type { AxiosRequestConfig };
export type AxiosResponse<T> = Promise<T>;

export default async function axios<T>(conf: AxiosRequestConfig): AxiosResponse<T> {
  const { data } = await axiosInstance(conf);
  return data as T;
}
