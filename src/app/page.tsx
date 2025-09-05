import HomeView from "@/modules/home/ui/views/home-view";
import { appRouter } from "@/trpc/routers/_app";
import { createTRPCContext } from "@/trpc/init";

export default async function Home() {
  const caller = appRouter.createCaller(await createTRPCContext());
  const menuRaw = await caller.menu.getMany();

  // Convert Date -> ISO string for HomeView
  const menu = menuRaw.map((item) => ({
    ...item,
    createdat: item.createdat.toISOString(),
    updatedat: item.updatedat.toISOString(),
  }));

  return <HomeView menu={menu} />;
}
