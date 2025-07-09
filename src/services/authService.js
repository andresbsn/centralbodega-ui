// src/services/authService.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (user, password) => {
  try {
    
    const response = await axios.post(`${API_URL}/user/login`, { user, password });

    if (response.data.usuario) {
      sessionStorage.setItem("user", JSON.stringify(response.data.usuario));
    }

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.mensaje || "Error al iniciar sesión");
  }
};

export const logout = () => {
  sessionStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const storedUser = sessionStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
};
