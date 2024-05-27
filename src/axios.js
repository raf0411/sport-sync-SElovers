import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "http://localhost:8801/backend/",
    withCredentials: true,
})