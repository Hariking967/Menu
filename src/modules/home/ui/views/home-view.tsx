"use client";

import React from "react";
// import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import Popular from "./popular";
import SearchItem from "./search-item";
import Categoric from "./categoric";

export default function HomeView() {
  const router = useRouter();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: menu } = useSuspenseQuery(trpc.menu.getMany.queryOptions());
  const categoricalMenu: { [key: string]: typeof menu } = {};
  menu.forEach((item) => {
    if (!(item.category in categoricalMenu)) {
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
