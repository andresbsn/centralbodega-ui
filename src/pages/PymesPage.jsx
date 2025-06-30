import { useEffect, useState } from "react";
import { fetchPymes } from "@services/pymesService";

export default function PymesPage() {
  const [pymes, setPymes] = useState([]);
  const [resultados, setResultados] = useState([]);
  const [seleccionada, setSeleccionada] = useState(null);
  const [busqueda, setBusqueda] = useState("");


  useEffect(() => {
    const cargarPymes = async () => {
      try {
        const data = await fetchPymes();
        setPymes(data);
      } catch (error) {
        console.error("Error al cargar PYMES:", error);
      }
    };
    cargarPymes();
  }, []);

  const handleBusqueda = (e) => {
    const texto = e.target.value;
    setBusqueda(texto);

    if (texto.length > 1) {
      const coincidencias = pymes.filter((p) =>
        p.NOMBRE_EMPRESA?.toLowerCase().includes(texto.toLowerCase())
      );
      setResultados(coincidencias.slice(0, 10));
    } else {
      setResultados([]);
    }
  };

  const seleccionarPyme = (pyme) => {
    setSeleccionada(pyme);
    setBusqueda(pyme.NOMBRE_EMPRESA);
    setResultados([]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Buscar PYMES</h2>

      <div className="relative">
        <input
          type="text"
          value={busqueda}
          onChange={handleBusqueda}
          placeholder="Buscar por nombre de empresa..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {resultados.length > 0 && (
          <ul className="absolute z-10 w-full border border-gray-200 mt-1 rounded-lg bg-white shadow-lg max-h-60 overflow-y-auto">
            {resultados.map((r) => (
              <li
                key={r.id_pymes}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-colors"
                onClick={() => seleccionarPyme(r)}
              >
                {r.NOMBRE_EMPRESA}
              </li>
            ))}
          </ul>
        )}
      </div>

      {seleccionada && (
        <div className="mt-8 bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2">Información de la Empresa</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div><strong>RUC:</strong> {seleccionada.RUC}</div>
            <div><strong>Empresa:</strong> {seleccionada.NOMBRE_EMPRESA}</div>
            <div><strong>Dirección:</strong> {seleccionada.DIRECCIÓN_COMPLETA}</div>
            <div><strong>Ciudad:</strong> {seleccionada.CIUDAD}</div>
            <div><strong>Provincia:</strong> {seleccionada.PROVINCIA_NOMBRE}</div>
            <div><strong>Teléfono:</strong> {seleccionada.TELEFONO1}</div>
            <div><strong>Correo:</strong> {seleccionada.CORREO_ELECTRONICO}</div>
          </div>
        </div>
      )}
    </div>
  );
}