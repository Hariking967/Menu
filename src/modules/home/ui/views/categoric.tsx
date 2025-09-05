"use client";

import React from "react";
import { Datas } from "./types";

interface Props {
  categoric_data: { [key: string]: Datas };
}

export default function Categoric({ categoric_data }: Props) {
  return (
    <>
      <p className="ml-1 text-3xl font-bold mb-4">Categories</p>
      <div className="grid grid-cols-2 gap-4 m-2">
        {Object.entries(categoric_data).map(([category, items]) => (
          <div key={category} className="border border-gray-300 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{category}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
