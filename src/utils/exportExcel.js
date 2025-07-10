import * as XLSX from "xlsx";

export function exportToExcel({ rsi, iess, cte, mypymes, nombre }) {
  const cteArray = Array.isArray(cte) ? cte : cte ? [cte] : [];

  const data = cteArray.length > 0
    ? cteArray.map((cteItem) => ({
        ...rsi,
        ...iess,
        ...mypymes,
        ...cteItem,
      }))
    : [
        {
          ...rsi,
          ...iess,
          ...mypymes,
        },
      ];

  if (data.length === 0 || Object.keys(data[0]).length === 0) {
    alert("No hay datos para exportar");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Datos");

  const safeNombre = nombre.replace(/[\\/:*?"<>|]/g, "_");
  XLSX.writeFile(workbook, `${safeNombre}.xlsx`);
}
