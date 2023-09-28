import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://blog-server-api-qr75.onrender.com/api",
});
