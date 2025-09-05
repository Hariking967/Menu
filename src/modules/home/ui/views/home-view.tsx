"use client";

import React from "react";
import SearchItem from "./search-item";
import Popular from "./popular";
import Categoric from "./categoric";
import { Datas } from "./types";

interface Props {
  menu: Datas;
}

export default function HomeView({ menu }: Props) {
  // Organize menu by category
  const categoricalMenu: { [key: string]: Datas } = {};
  menu.forEach((item) => {
    if (!categoricalMenu[item.category]) {
      categoricalMenu[item.category] = [];
    }
    categoricalMenu[item.category].push(item);
  });

  return (
    <>
      <SearchItem />
      <Popular data={menu} />
      <Categoric categoric_data={categoricalMenu} />
    </>
  );
}
