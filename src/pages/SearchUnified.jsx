import { useEffect, useState } from "react";
import { fetchDatosUnificados } from "@services/dataService";
import DetailPyme from "@components/DetailPyme";
import DetailIess from "@components/DetailIess";

export default function SearchUnified() {
  const [datos, setDatos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    const cargarDatos = async () => {
      const data = await fetchDatosUnificados();
      setDatos(data);
    };
    cargarDatos();
  }, []);

  const handleBusqueda = (e) => {
    const texto = e.target.value;
    setBusqueda(texto);

    if (texto.length > 1) {
      const coincidencias = datos.filter((item) => {
        const nombre = item.NOMBRE_EMPRESA || item.NOMEM || "";
        return nombre.toLowerCase().includes(texto.toLowerCase());
      });
      setResultados(coincidencias.slice(0, 10));
    } else {
      setResultados([]);
    }
  };

  const seleccionarItem = (item) => {
    setSeleccionado(item);
    setBusqueda(item.NOMBRE_EMPRESA || item.NOMEM || "");
    setResultados([]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Búsqueda de Empresas / IESS
      </h2>

      <div className="relative">
        <input
          type="text"
          value={busqueda}
          onChange={handleBusqueda}
          placeholder="Buscar por nombre..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {resultados.length > 0 && (
          <ul className="absolute z-10 w-full border border-gray-200 mt-1 rounded-lg bg-white shadow-lg max-h-60 overflow-y-auto">
            {resultados.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-colors"
                onClick={() => seleccionarItem(item)}
              >
                {(item.NOMBRE_EMPRESA || item.NOMEM || "") + " (" + item._tipo + ")"}
              </li>
            ))}
          </ul>
        )}
      </div>

     {seleccionado && (
        <div className="mt-8 bg-white shadow-lg rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2">
            Información Detallada ({seleccionado._tipo})
            </h3>
            {seleccionado._tipo === "pyme" ? (
            <DetailPyme data={seleccionado} />
            ) : (
            <DetailIess data={seleccionado} />
            )}
        </div>
        )}

    </div>
  );
}

