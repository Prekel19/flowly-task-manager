import { SideNav } from "../components/SideNav";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="flex flex-col bg-main flex-1">
        <div className="flex min-h-12 bg-white mb-10"></div>
        <Outlet />
      </main>
    </div>
  );
};
