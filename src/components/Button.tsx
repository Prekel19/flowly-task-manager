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
      className="flex justify-center bg-primary1 font-medium text-white rounded-lg py-1 cursor-pointer hover:bg-secondary1 transition duration-200"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
