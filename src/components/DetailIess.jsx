export default function DetailIess({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 text-left">
      <div><strong>RUC:</strong> {data.rucemp}</div>
      <div><strong>Nombre:</strong> {data.NOMEM}</div>
      <div><strong>Cod. Tipo Empresa:</strong> {data.CODTIPEMP}</div>
      <div><strong>Tipo:</strong> {data.CODTIPEMP}</div>
      <div><strong>Teléfono:</strong> {data.TELSUC}</div>
      <div><strong>Dirección:</strong> {data.DIRSUC}</div>
      <div><strong>Afiliado:</strong> {data.APENOMAF}</div>
      <div><strong>Dirección Afiliado:</strong> {data.DIRAFI}</div>
      <div><strong>Tel. Afiliado:</strong> {data.TELAFI}</div>
      <div><strong>Email:</strong> {data.EMAIL}</div>
      <div><strong>Ocupacion Afiliado:</strong> {data.OCUAFI}</div>
    </div>
  );
}
