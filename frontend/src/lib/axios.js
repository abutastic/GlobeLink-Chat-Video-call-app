import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5007/api",
  withCredentials: true, // send cookies with the request
});
