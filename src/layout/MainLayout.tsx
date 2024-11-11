import { SideNav } from "../components/SideNav";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="bg-main flex-1">
        <Outlet />
      </main>
    </div>
  );
};
