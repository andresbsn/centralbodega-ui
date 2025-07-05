import * as XLSX from "xlsx";

export function exportToExcel({ rsi, iess, cte, nombre }) {
  const cteArray = Array.isArray(cte) ? cte : cte ? [cte] : [];

  const data = cteArray.map((cteItem) => ({
    ...rsi,
    ...iess,
    ...cteItem,
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Datos");

  const safeNombre = nombre.replace(/[\\/:*?"<>|]/g, "_"); // Para evitar caracteres inválidos
  XLSX.writeFile(workbook, `${safeNombre}.xlsx`);
}
