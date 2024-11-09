import { MouseEventHandler } from "react";
import { BeatLoader } from "react-spinners";

export const Button = ({
  title,
  darkTheme,
  isLoading,
  onClick,
}: {
  title: string;
  darkTheme: boolean;
  isLoading?: boolean;
  onClick: MouseEventHandler;
}) => {
  return (
    <button
      className={`min-h-8 flex items-center justify-center font-medium text-white rounded-lg py-1 cursor-pointer transition duration-200 ${
        darkTheme ? "bg-primary1 hover:bg-secondary1" : "bg-accent1 hover:bg-accent2"
      }`}
      onClick={onClick}
    >
      {isLoading ? <BeatLoader size={12} color="#ffffff" /> : title}
    </button>
  );
};
