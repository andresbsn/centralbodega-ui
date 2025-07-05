import React from "react";

export default function UnifiedPersonDetail({ data }) {
  if (!data) return null;

  const rsi = data.rsi || {};
  const iess = data.iess || {};
  const cteArray = Array.isArray(data.cte) ? data.cte : data.cte ? [data.cte] : [];

  // Tomamos todas las claves posibles
  const rsiKeys = Object.keys(rsi);
  const iessKeys = Object.keys(iess);
  const cteKeys = cteArray.length > 0 ? Object.keys(cteArray[0]) : [];

  const allKeys = [...rsiKeys, ...iessKeys, ...cteKeys];

  return (
    <div className="w-full overflow-x-auto text-xs">
      <h3 className="text-base font-semibold mb-2">Detalle de Persona</h3>
      <table className="w-full border border-gray-300 table-auto">
        <thead className="bg-gray-100">
          <tr>
            {allKeys.map((key) => (
              <th
                key={key}
                className="px-2 py-1 border text-left whitespace-nowrap"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cteArray.length > 0 ? (
            cteArray.map((cteItem, idx) => (
              <tr key={idx}>
                {rsiKeys.map((key) => (
                  <td key={`rsi-${key}`} className="px-2 py-1 border whitespace-nowrap">
                    {rsi[key] || "—"}
                  </td>
                ))}
                {iessKeys.map((key) => (
                  <td key={`iess-${key}`} className="px-2 py-1 border whitespace-nowrap">
                    {iess[key] || "—"}
                  </td>
                ))}
                {cteKeys.map((key) => (
                  <td key={`cte-${key}`} className="px-2 py-1 border whitespace-nowrap">
                    {cteItem[key] || "—"}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              {allKeys.map((key) => (
                <td key={key} className="px-2 py-1 border whitespace-nowrap">
                  {rsi[key] || iess[key] || "—"}
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
