import { useState } from "react";
import { searchUnifiedPerson, getDetallesPersona } from "@services/unifiedPersonService";
import UnifiedPersonDetail from "@components/UnifiedPersonDetail";
import { exportToExcel } from "@utils/exportExcel";

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
      setResultados(resultados);
      setTotalResultados(total);
    } else {
      setResultados([]);
      setTotalResultados(0);
    }
  };

  const handleSeleccion = async (id_persona) => {
    const detalle = await getDetallesPersona(id_persona);
    setDetalle(detalle);
    setResultados([]);
  };

  const tieneDatos =
    detalle && (detalle.rsi || detalle.iess || detalle.cte);

  const handleExportar = () => {
    if (!tieneDatos) return;
    const datosExportar = { ...detalle.rsi, ...detalle.iess, ...detalle.cte };
    exportToExcel([datosExportar], "detalle_persona");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4 text-center">Buscar Personas Unificadas</h2>

      <input
        type="text"
        value={busqueda}
        onChange={handleBusqueda}
        placeholder="Buscar por nombre..."
        className="border border-gray-300 px-4 py-2 rounded w-full"
      />

      {/* Mostrar cantidad de resultados */}
      {resultados.length > 0 && (
        <p className="text-sm text-gray-500 mt-2 mb-1">
          Mostrando {resultados.length} resultados de {totalResultados} encontrados.
        </p>
      )}

      {/* Lista de coincidencias */}
      {resultados.length > 0 && (
        <ul className="bg-white border rounded shadow divide-y max-h-64 overflow-y-auto">
          {resultados.map((item) => (
            <li
              key={item.id_persona}
              onClick={() => handleSeleccion(item.id_persona)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-50"
            >
              {item.nombre_completo}
            </li>
          ))}
        </ul>
      )}

      {detalle && (
        <div className="w-full p-6">
          <UnifiedPersonDetail data={detalle} />

          <button
            onClick={() =>
              exportToExcel({
                rsi: detalle.rsi,
                iess: detalle.iess,
                cte: detalle.cte,
                nombre: detalle.iess?.NOMEM || detalle.rsi?.nomem || "exportacion"
              })
            }
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
          >
            Exportar a Excel
          </button>
        </div>
      )}
    </div>
  );
}
