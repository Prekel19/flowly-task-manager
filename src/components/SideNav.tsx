import { IMenuItems } from "@/models/types";
import { Logo } from "./ui/Logo";
import { NavItem } from "./NavItem";

const menuItems: IMenuItems[] = [
  {
    title: "Home",
    linkTo: "/",
  },
  {
    title: "Przydziel zadanie",
    linkTo: "/assign-task",
  },
  {
    title: "kalendarz",
    linkTo: "/calendar",
  },
  {
    title: "Zadania",
    linkTo: "/tasks",
  },
  {
    title: "Zespół",
    linkTo: "/team",
  },
];

export const SideNav = () => {
  return (
    <div className="bg-sidenav flex flex-col gap-2 sidenav">
      <div className="flex justify-center py-3">
        <Logo />
      </div>
      <div className="flex flex-col">
        {menuItems.map((item) => (
          <NavItem title={item.title} linkTo={item.linkTo} />
        ))}
      </div>
    </div>
  );
};
