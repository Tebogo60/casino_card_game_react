import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth";

export const register = async (data) => {
    return axios.post(`${API_URL}/complete`, data);
};

export const forgotPassword = async (data) => {
    return axios.post(`${API_URL}/forgot-password`, data);
};

export const resetPassword = async (data) => {
    return axios.post(`${API_URL}/reset-password`, data);
};
