import IAxios from "axios";

export const axios = IAxios.create({
  timeout: 10000,
  baseURL: "",
});

axios.interceptors.request.use((config) => {
  return config;
});
