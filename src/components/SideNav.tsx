import { Logo } from "./ui/Logo";
import { NavItem } from "./NavItem";
import { menuItems } from "../models/data";

import Home from "../assets/menu/home.svg";
import AddTask from "../assets/menu/add-task.svg";
import Calendar from "../assets/menu/calendar.svg";
import Tasks from "../assets/menu/tasks.svg";
import Team from "../assets/menu/team.svg";

export const SideNav = () => {
  const icons: string[] = [Home, AddTask, Calendar, Tasks, Team];

  return (
    <div className="bg-sidenav flex flex-col gap-2 sidenav">
      <div className="flex justify-center py-3">
        <Logo />
      </div>
      <div className="flex flex-col">
        {menuItems.map((item, index) => (
          <NavItem
            key={index}
            title={item.title}
            icon={icons[index]}
            linkTo={item.linkTo}
          />
        ))}
      </div>
    </div>
  );
};
