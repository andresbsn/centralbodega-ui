import React from "react";

export default function UnifiedPersonDetail({ data }) {
  if (!data) return null;

  const campos = {
    RSI: data.rsi || {},
    IESS: data.iess || {},
    CTE: data.cte || {},
  };

  const allKeys = Array.from(
    new Set([
      ...Object.keys(campos.RSI),
      ...Object.keys(campos.IESS),
      ...Object.keys(campos.CTE),
    ])
  );

  return (
    <div className="w-full overflow-x-auto text-xs">
      <h3 className="text-base font-semibold mb-2">Datos Combinados</h3>
      <table className="w-full border border-gray-300 table-auto">
        <thead className="bg-gray-100">
          <tr>
            {allKeys.map((key) => (
              <th key={key} className="px-2 py-1 border text-left whitespace-nowrap">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {allKeys.map((key) => (
              <td key={key} className="px-2 py-1 border whitespace-nowrap">
                {campos.RSI[key] || campos.IESS[key] || campos.CTE[key] || "—"}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
