// app/page.tsx
import HomeView from "@/modules/home/ui/views/home-view";
import { trpc } from "@/trpc/server"; // server-side tRPC proxy

export default async function Home() {
  // Directly call tRPC on the server — no HTTP request needed
  const menu = await trpc.menu.getMany.query();

  return <HomeView menu={menu} />;
}
