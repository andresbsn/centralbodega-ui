export default function DetailResult({ item }) {
  if (!item) return null;

  if (item.tipo === "pyme") {
    return (
      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2">Información de PyME</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 text-right">
          <div><strong>RUC:</strong> {item.RUC}</div>
          <div><strong>Empresa:</strong> {item.NOMBRE_EMPRESA}</div>
          <div><strong>Dirección:</strong> {item.DIRECCIÓN_COMPLETA}</div>
          <div><strong>Provincia:</strong> {item.PROVINCIA_NOMBRE}</div>
          <div><strong>Teléfono:</strong> {item.TELEFONO1}</div>
        </div>
      </div>
    );
  }

  if (item.tipo === "iess") {
    return (
      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2">Información de IESS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 text-right">
          <div><strong>Nombre:</strong> {item.NOMEM}</div>
          <div><strong>RUCEMP:</strong> {item.RUCEMP}</div>
          <div><strong>CODTIPEMP:</strong> {item.CODTIPEMP}</div>
          <div><strong>TELSUC:</strong> {item.TELSUC}</div>
        </div>
      </div>
    );
  }

  return null;
}
