import HomeView from "@/modules/home/ui/views/home-view";
import { Suspense } from "react";

export default async function Home() {
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });
  // if (!session) {
  //   redirect("/auth/sign-up");
  // }
  // if (session.user.email == "harigallery9@gmail.com") {
  //   return <AdminView />;
  // }
  return (
    <>
      <Suspense fallback={<div>Loading bookings...</div>}>
        <HomeView />
      </Suspense>
    </>
  );
}
