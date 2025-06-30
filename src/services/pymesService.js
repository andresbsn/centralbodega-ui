const API_URL = import.meta.env.VITE_API_URL;

export const fetchPymes = async () => {
  try {
    const response = await fetch(`${API_URL}/pymesguayas/all`);
    if (!response.ok) throw new Error("Error al cargar PYMES");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
