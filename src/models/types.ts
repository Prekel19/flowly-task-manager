import { MouseEventHandler, PropsWithChildren } from "react";

export interface ButtonProps {
  title: string;
  darkTheme: boolean;
  isLoading?: boolean;
  onClick: MouseEventHandler;
}

export type ButtonLinkProps = PropsWithChildren & {
  linkTo: string;
  className?: string;
};

export interface IMenuItems {
  title: string;
  linkTo: string;
}

export interface User {
  user_id: string;
  role: string;
  team_id?: string;
}
