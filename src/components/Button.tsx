import { MouseEventHandler } from "react";

export const Button = ({
  title,
  onClick,
}: {
  title: string;
  onClick: MouseEventHandler;
}) => {
  return (
    <button
      className="flex justify-center bg-primary1 font-medium text-white rounded-lg py-1 cursor-pointer"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
