const API_URL = import.meta.env.VITE_API_URL;

export const fetchDatosUnificados = async () => {
  try {
    const [pymesRes, iessRes] = await Promise.all([
      fetch(`${API_URL}/pymesguayas/all`),
      fetch(`${API_URL}/iessguayaquil/all`),
    ]);

    const pymes = await pymesRes.json();
    const iess = await iessRes.json();

    // Añadir un tipo para diferenciarlos luego
    const datosPymes = pymes.map(p => ({ ...p, _tipo: 'pyme' }));
    const datosIess = iess.map(i => ({ ...i, _tipo: 'iess' }));

    return [...datosPymes, ...datosIess];
  } catch (error) {
    console.error("Error al traer los datos combinados:", error);
    return [];
  }
};
