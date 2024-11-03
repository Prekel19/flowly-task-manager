import { MouseEventHandler } from "react";

export const LightButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: MouseEventHandler;
}) => {
  return (
    <button
      className="flex justify-center bg-accent1 font-medium text-white rounded-lg py-1 cursor-pointer hover:bg-accent2 transition duration-200"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
