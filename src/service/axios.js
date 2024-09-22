import IAxios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTc1ZTE1OWQ5MWI2NTJkYTg1YzI0MTE5MDE4MTFjMSIsIm5iZiI6MTcyNjgzNTE4NS4yMDA5MTEsInN1YiI6IjY2ZWQ0Yjk5NzcyZDBmYTU3M2JkYWRmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W4VEfc3sXeB_yFeGA9TeN9pe0LGPdg2xf8yfzgtTJik";

export const axios = IAxios.create({
  timeout: 10000,
  baseURL: "https://api.themoviedb.org/3/",
});

axios.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${token}`;
  config.headers["Content-Type"] = "application/json";
  return config;
});
