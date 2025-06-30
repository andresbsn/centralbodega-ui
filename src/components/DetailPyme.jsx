export default function DetailPyme({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 text-left">
      <div><strong>RUC:</strong> {data.RUC}</div>
      <div><strong>Empresa:</strong> {data.NOMBRE_EMPRESA}</div>
      <div><strong>Nombre:</strong> {data.NOMBRE_COMPLETO}</div>
      <div><strong>Dirección:</strong> {data.DIRECCION_COMPLETA + ' ' + data.NUMERO}</div>
      <div><strong>Ciudad:</strong> {data.CIUDAD}</div>
      <div><strong>Provincia:</strong> {data.PROVINCIA_NOMBRE}</div>
      <div><strong>Teléfono:</strong> {data.TELEFONO1}</div>
      <div><strong>Correo:</strong> {data.CORREO_ELECTRONICO}</div>
      <div><strong>Descripción:</strong> {data.DESCRIPCIÓN}</div>
    </div>
  );
}
