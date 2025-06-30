import { useEffect, useState } from "react";
import { fetchIESS } from "@services/iessService";

export default function IESSPage() {
  const [registros, setRegistros] = useState([]);
  const [resultados, setResultados] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      const data = await fetchIESS();
      console.log(data);
      
      setRegistros(data);
    };
    cargarDatos();
  }, []);

  const handleBusqueda = (e) => {
    const texto = e.target.value;
    setBusqueda(texto);

    if (texto.length > 1) {
      const coincidencias = registros.filter((item) =>
        item.NOMEM?.toLowerCase().includes(texto.toLowerCase())
      );
      setResultados(coincidencias.slice(0, 10));
    } else {
      setResultados([]);
    }
  };

  const seleccionarItem = (item) => {
    setSeleccionado(item);
    setBusqueda(item.NOMEM);
    setResultados([]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Buscar en IESS</h2>

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
              {resultados.map((r) => (
              <li
                key={r.id} // usá el campo que sea único
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-colors"
                onClick={() => seleccionarItem(r)}
              >
                {r.NOMEM}
              </li>
            ))}
          </ul>
        )}
      </div>

      {seleccionado && (
        <div className="mt-8 bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2">Información</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 text-left">
            <div><strong>rucemp:</strong> {seleccionado.rucemp}</div>
            <div><strong>Nombre:</strong> {seleccionado.NOMEM}</div>
            <div><strong>CODTIPEMP:</strong> {seleccionado.CODTIPEMP}</div>
            <div><strong>TELSUC:</strong> {seleccionado.TELSUC}</div>
            <div><strong>DIRSUC:</strong> {seleccionado.DIRSUC}</div>
            <div><strong>APENOMAF:</strong> {seleccionado.APENOMAF}</div>
            <div><strong>DIRAFI:</strong> {seleccionado.DIRAFI}</div>
            {/* Agregá más campos si necesitás */}
          </div>
        </div>
      )}
    </div>
  );
}
