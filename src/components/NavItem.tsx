import { IMenuItems } from "@/models/types";
import { NavLink } from "react-router-dom";

export const NavItem = ({ title, linkTo }: IMenuItems) => {
  return (
    <NavLink
      to={linkTo}
      className="bg-transparent flex justify-left py-2 pl-5 text-sm text-gray-100 hover:bg-sidenav2"
      style={({ isActive }) => {
        return { background: isActive ? "#202c3f" : "" };
      }}
    >
      {title}
    </NavLink>
  );
};
