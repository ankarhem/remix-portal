import { HomeIcon, BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "@remix-run/react";
import NorceIcon from "~/components/NorceIcon";

const linkStyle =
  "flex gap-2 items-center rounded-md px-4 py-2 truncate focus-visible:outline outline-2 outline-offset-2 outline-primary-focus hover:bg-base-100";
const activeLinkStyle =
  "bg-primary text-primary-content hover:bg-primary-focus";

function Navbar() {
  return (
    <div
      className="flex flex-col justify-between w-80 bg-base-300 text-base-content h-full"
      data-theme="dark"
    >
      <nav>
        <Link to="/">
          <NorceIcon />
        </Link>
        <ul className="flex flex-col px-4 text-base gap-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeLinkStyle : ""}`
              }
            >
              <HomeIcon className="w-4 h-4" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="shops"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeLinkStyle : ""}`
              }
            >
              <BuildingStorefrontIcon className="w-4 h-4" />
              Shops
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-2 px-4 py-2 bg-base-content text-base-300 ">
        <img
          src="https://www.gravatar.com/avatar/e9e97f0e0773fcdaa31f8aaa271aa17c?s=160"
          alt=""
          className="h-12 w-12 rounded-full"
        />
        <div>
          <p className="font-bold">Jakob Ankarhem</p>
          <p>jakank@jetshop.se</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
