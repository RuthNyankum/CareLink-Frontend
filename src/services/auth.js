import { apiClient } from "./config";

export const apiSignUp = async(payload) => {
    return apiClient.post("/auth/signup", payload);
}

export const apiLogIn = async(payload) => {
    return apiClient.post("/auth/login", payload);
}

export const apiLogout = async () => {
    clearToken();
  };
 
  export const apiCheckEmail = async(email) => {
    return apiClient.get(`/auth/${email}`);
}

