"use client";

interface DynamicTableProps {
  headers: string[];
  rows: string[][];
}

export default function DynamicTable({ headers, rows }: DynamicTableProps) {
  return (
    <div
      className="
        overflow-x-auto
        mt-6
      "
    >
      <table
        className="
          min-w-full
          text-sm text-left
          border border-gray-400
        "
      >
        <thead
          className="
            text-gray-700
            bg-gray-100
          "
        >
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="
                  px-4 py-2
                  font-bold
                  border
                "
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className={`
                    px-4 py-2
                    border
                    ${colIndex == 0 ? "font-bold" : ""}
                  `}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
