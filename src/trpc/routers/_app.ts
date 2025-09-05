import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { menuRouter } from "@/modules/home/server/procedures";
export const appRouter = createTRPCRouter({
  menu: menuRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
