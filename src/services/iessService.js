const API_URL = import.meta.env.VITE_API_URL;

export const fetchIESS = async () => {
  try {
    console.log("API_URL:", API_URL);
    const response = await fetch(`${API_URL}/iessguayaquil/all`);
    if (!response.ok) throw new Error("Error al cargar datos del IESS");
    return await response.json();
  } catch (error) {
    console.error("Error al obtener datos del IESS:", error);
    return [];
  }
};
