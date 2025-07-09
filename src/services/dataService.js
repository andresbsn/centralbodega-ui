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

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Datos");

  const safeNombre = nombre.replace(/[\\/:*?"<>|]/g, "_"); // Evita caracteres inválidos en el nombre del archivo
  XLSX.writeFile(workbook, `${safeNombre}.xlsx`);
}
