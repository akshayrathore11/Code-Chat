import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://code-chat-0p5i.onrender.com" : "/api",
  withCredentials: true,
});
