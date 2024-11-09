import { PropsWithChildren } from "react";
import { Logo } from "../Logo";

export const AuthContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid w-full min-h-screen place-items-center">
      <div className="max-w-96 w-full flex flex-col gap-4 rounded-xl px-6 py-8 mx-8 shadow-[0_0_30px_-1px_rgba(0,0,0,0.2)]">
        <Logo />
        {children}
      </div>
    </div>
  );
};
