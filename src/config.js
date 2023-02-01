import axios from "axios";
// https://blog24-server-app.onrender.com/api/

export const axiosInstance = axios.create({
  baseURL: "https://blog24-server.vercel.app/api/",
});
