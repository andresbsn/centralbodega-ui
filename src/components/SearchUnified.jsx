import { useState } from "react";
import { searchUnifiedPerson, getDetallesPersona } from "@services/unifiedPersonService";
import UnifiedPersonDetail from "@components/UnifiedPersonDetail";

export default function SearchUnificadas() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [totalResultados, setTotalResultados] = useState(0);
  const [detalle, setDetalle] = useState(null);

  const handleBusqueda = async (e) => {
    const texto = e.target.value;
    setBusqueda(texto);
    setDetalle(null);

    if (texto.length > 2) {
      const { resultados, total } = await searchUnifiedPerson(texto, 50, 0);
      console.log(resultados);
      
      setResultados(resultados);
      setTotalResultados(total);
    } else {
      setResultados([]);
      setTotalResultados(0);
    }
  };

  const handleSeleccion = async (id_persona) => {
    const detalles = await getDetallesPersona(id_persona);
    setDetalle(detalles);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Buscar Personas Unificadas</h2>
      <input
        type="text"
        value={busqueda}
        onChange={handleBusqueda}
        placeholder="Buscar por nombre..."
        className="border border-gray-300 px-4 py-2 rounded w-full"
      />

      {totalResultados > 0 && (
        <div className="text-sm text-gray-600 mt-1">
          {totalResultados} resultados encontrados
        </div>
      )}

      {resultados.length > 0 && (
        <ul className="mt-4 bg-white rounded shadow divide-y max-h-80 overflow-y-auto">
          {resultados.map((item) => (
            <li
              key={item.id_persona}
              onClick={() => handleSeleccion(item.id_persona)}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
            >
              {item.nombre_completo}
            </li>
          ))}
        </ul>
      )}

      {detalle && <UnifiedPersonDetail data={detalle} />}
    </div>
  );
}
