import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchUnifiedDetail = async (id) => {
  const response = await axios.get(`${API_URL}/unified/${id}`);
  return response.data;
};
