import { Link, NavLink, Outlet } from "@remix-run/react";
import NorceIcon from "~/components/NorceIcon";
import { BuildingStorefrontIcon, HomeIcon } from "@heroicons/react/24/outline";
import Navbar from "~/components/Navbar";

export default function Layout() {
  return (
    <div className="flex w-full h-screen">
      <Navbar />
      <main className="w-full h-full overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}
