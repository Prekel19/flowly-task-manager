import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col w-full max-w-desktop mx-auto">{children}</div>;
};
