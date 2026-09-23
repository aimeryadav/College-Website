// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // your Express server
  withCredentials: true,                // send JWT cookie
});

export default api;
