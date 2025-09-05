"use client";

import React, { useState } from "react";
import { Datas } from "./types";

interface Props {
  data: Datas;
}

export default function Popular({ data }: Props) {
  // Sort data by ordercount descending
  const sorted = [...data].sort((a, b) => b.ordercount - a.ordercount);
  // State for each item's count
  const [counts, setCounts] = useState<{ [id: string]: number }>({});
  const handleAdd = (item: Datas[number]) => {
    setCounts((prev) => {
      const newCount = (prev[item.id] || 0) + 1;
      console.log("item added successfully");
      // if (onAdd) onAdd(item, newCount);
      return { ...prev, [item.id]: newCount };
    });
  };

  const handleSub = (item: Datas[number]) => {
    setCounts((prev) => {
      const newCount = Math.max((prev[item.id] || 0) - 1, 0);
      console.log("item added successfully");
      // if (onSub) onSub(item, newCount);
      return { ...prev, [item.id]: newCount };
    });
  };

  return (
    <>
      <p className="ml-1 text-2xl font-extrabold font-mono tracking-wide text-yellow-500 drop-shadow-sm">
        Popular items
      </p>
      <div className="flex flex-col gap-4 m-2">
        {sorted.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border rounded-lg p-4 shadow-sm bg-white"
          >
            <span className="font-medium text-gray-800">{item.name}</span>
            <div className="flex items-center gap-2">
              <button
                className="px-2 py-1 bg-gray-200 rounded text-lg"
                onClick={() => handleSub(item)}
              >
                -
              </button>
              <span className="w-6 text-center">{counts[item.id] || 0}</span>
              <button
                className="px-2 py-1 bg-gray-200 rounded text-lg"
                onClick={() => handleAdd(item)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
