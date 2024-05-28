import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "http://localhost:8802/backend/",
    withCredentials: true,
})