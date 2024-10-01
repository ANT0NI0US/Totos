import IAxios from "axios";

export const axios = IAxios.create({
  timeout: 10000,
  baseURL: "https://api.themoviedb.org/3/",
});

axios.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_API_TOKEN; 
  config.headers["Authorization"] = `Bearer ${token}`;
  config.headers["Content-Type"] = "application/json";
  return config;
});
