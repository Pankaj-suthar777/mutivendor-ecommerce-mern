import axios from "axios";
//const local = "http://localhost:5000";
const production =
  "https://mutivendor-ecommerce-mern-apuy0ihzk-pankajs-projects-1f54d63d.vercel.app";
const api = axios.create({
  baseURL: `${production}/api`,
});

export default api;
