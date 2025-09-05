import { createTRPCRouter, baseProcedure } from "@/trpc/init";
import { db } from "@/db";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { menu } from "@/db/schema";
import { eq } from "drizzle-orm";

export const menuRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    const items = await db.select().from(menu);
    return items;
  }),

  getOne: baseProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      const items = await db
        .select()
        .from(menu)
        .where(eq(menu.name, input.name));
      if (!items) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Menu item not found",
        });
      }
      return items;
    }),
});
