import axios from "axios";

const local = "http://localhost:5000";
const production = "https://mutivendor-ecommerce-mern-api.vercel.app";
const accessToken = localStorage.getItem("accessToken");

const api = axios.create({
  baseURL: `${production}/api`,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default api;
