import React, { useState } from "react";

const initialData = [
  {
    name: "Shopify",
    color: "bg-red-500",
    visibility: 100.0,
    position: 1.1,
    sentiment: 88,
  },
  {
    name: "Wix",
    color: "bg-purple-500",
    visibility: 100.0,
    position: 2.8,
    sentiment: 68,
  },
  {
    name: "WooCommerce",
    color: "bg-yellow-500",
    visibility: 91.7,
    position: 4.0,
    sentiment: 67,
  },
  {
    name: "BigCommerce",
    color: "bg-orange-500",
    visibility: 83.3,
    position: 4.9,
    sentiment: 72,
  },
  {
    name: "Squarespace",
    color: "bg-green-500",
    visibility: 83.3,
    position: 3.3,
    sentiment: 69,
  },
  {
    name: "Ecwid",
    color: "bg-amber-400",
    visibility: 41.7,
    position: 6.6,
    sentiment: 61,
  },
  {
    name: "Ecwid by Lightspeed",
    color: "bg-pink-500",
    visibility: 33.3,
    position: 6.5,
    sentiment: 63,
  },
];

const Table = () => {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({
    key: "visibility",
    direction: "desc",
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const getArrow = (key) => {
    if (sortConfig.key !== key) return "↕";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  return (
    <div className="flex justify-center rounded-[40px] items-center w-[925px] h-[720px] bg-gray-50">
      <div className="flex justify-center items-center bg-white rounded-2xl shadow-md px-[6%] py-[8%] w-[925px] h-[720px] overflow-y-auto">
        <table className="flex flex-col w-full h-full text-left border-collapse">
          <thead className="flex h-[12.5%]">
            <tr className="flex w-full text-sm border-b">
              <th
                className="w-[30%] text-[16px] font-bold flex pl-[20px] items-center cursor-pointer"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center gap-1">
                  <span className="mb-[8px]" style={{fontFamily:"fantasy"}}>&#8593;&#8595;</span> Competitor Name
                </div>
              </th>
              <th
                className="w-[20%] flex justify-center items-center text-[16px] font-bold  cursor-pointer"
                onClick={() => handleSort("visibility")}
              >
                <div className="flex items-center gap-1">
                  <span className="mb-[8px]" style={{fontFamily:"fantasy"}}>&#8593;&#8595;</span> Visibility
                </div>
              </th>
              <th
                className="w-[20%] flex justify-center items-center text-[16px] font-bold  cursor-pointer"
                onClick={() => handleSort("position")}
              >
                <div className="flex items-center gap-1">
                  <span className="mb-[8px]" style={{fontFamily:"fantasy"}}>&#8593;&#8595;</span> Position
                </div>
              </th>
              <th
                className="w-[30%] flex justify-center items-center text-[16px] font-bold  cursor-pointer"
                onClick={() => handleSort("sentiment")}
              >
                <div className="flex items-center gap-1">
                  <span className="mb-[8px]" style={{fontFamily:"fantasy"}}>&#8593;&#8595;</span> Sentiment Score
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="flex flex-col flex-grow w-[100%] text-gray-800 text-sm">
            {data.map((c, i) => (
              <tr
                key={i}
                className="flex w-full h-[14.28%] border-b last:border-none hover:bg-gray-50 transition-colors"
              >
                <td className="flex pl-[20px] h-[100%] w-[30%] py-4 items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${c.color}`}></span>
                  {c.name}
                </td>
                <td className="flex h-[100%] w-[20%] py-4 items-center justify-center">
                  {c.visibility.toFixed(1)}%
                </td>
                <td className="flex h-[100%] w-[20%] py-4 items-center justify-center">
                  {c.position}
                </td>
                <td className="flex h-[100%] w-[30%] py-4 items-center justify-center font-medium">
                  + {c.sentiment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
