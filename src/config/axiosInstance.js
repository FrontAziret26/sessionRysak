import axios from "axios";

const BASE_URL = "http://localhost:3002";
const headers = { "Content-type": "application/json" };

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers,
});
