import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth";

export const saveSession = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem(
        "user",
        JSON.stringify({
            email: data.email,
            role: data.role,
        }),
    );
    console.log("session saved:", localStorage.getItem("user")); // verify it's there
};

export const clearSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

export const getToken = () => localStorage.getItem("token");
export const getUser = () => {
    try {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    } catch {
        return null;
    }
};
export const isLoggedIn = () => !!getToken();

export const register = async (data) => {
    return axios.post(`${API_URL}/complete`, data);
};

export const login = async (data) => {
    const response = await axios.post(`${API_URL}/login`, data);
    saveSession(response.data);
    return response.data;
};

export const forgotPassword = async (data) => {
    return axios.post(`${API_URL}/forgot-password`, data);
};

export const resetPassword = async (data) => {
    return axios.post(`${API_URL}/reset-password`, data);
};

export const logout = () => {
    clearSession();
};
