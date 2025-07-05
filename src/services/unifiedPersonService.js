const API_URL = import.meta.env.VITE_API_URL;

export const searchUnifiedPerson = async (nombre, limit = 20, offset = 0) => {
  try {
    const response = await fetch(
      `${API_URL}/person/search?nombre=${encodeURIComponent(nombre)}&limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error al buscar personas unificadas:", error);
    return { resultados: [], total: 0 };
  }
};


export const getDetallesPersona = async (id_persona) => {
  try {
    const response = await fetch(`${API_URL}/person/unified/${id_persona}`);
    if (!response.ok) throw new Error("No se pudieron obtener los detalles");
    return await response.json();
  } catch (error) {
    console.error("Error al obtener detalles de persona:", error);
    return null;
  }
};
