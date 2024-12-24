import { IMenuItems } from "@/models/types";
import { NavLink } from "react-router-dom";

export const NavItem = ({ title, linkTo, icon }: IMenuItems) => {
  return (
    <NavLink
      to={linkTo}
      className="bg-transparent flex justify-left items-center gap-2 py-2 pl-5 text-md text-gray-100 hover:bg-sidenav2"
      style={({ isActive }) => {
        return { background: isActive ? "#1e293a" : "" };
      }}
    >
      <img src={icon} width="22" height="22" alt={`${title} icon`} />
      {title}
    </NavLink>
  );
};
