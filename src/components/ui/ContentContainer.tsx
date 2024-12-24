import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  customClass?: string;
}

export const ContentContainer = ({ children, customClass }: Props) => {
  return (
    <div
      className={`bg-white flex flex-col rounded-md shadow-[0_2px_5px_-1px_rgba(50,50,93,0.025),0_1px_3px_-1px_rgba(0,0,0,0.05)] ${customClass}`}
    >
      {children}
    </div>
  );
};
