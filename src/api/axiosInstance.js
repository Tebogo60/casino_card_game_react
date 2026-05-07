import axios from "axios";
import { getToken, clearSession } from "./auth";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1",
});

axiosInstance.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            clearSession();
            window.location.href = "/login";
        }
        return Promise.reject(error);
    },
);

export default axiosInstance;
