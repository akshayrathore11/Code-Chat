import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://code-chat-pp5z.onrender.com" : "/api",
  withCredentials: true,
});
