import { MouseEventHandler } from "react";
import { BeatLoader } from "react-spinners";

export const Button = ({
  title,
  isLoading,
  onClick,
}: {
  title: string;
  isLoading?: boolean;
  onClick: MouseEventHandler;
}) => {
  return (
    <button
      className="min-h-8 flex items-center justify-center bg-primary1 font-medium text-white rounded-lg py-1 cursor-pointer hover:bg-secondary1 transition duration-200"
      onClick={onClick}
    >
      {isLoading ? <BeatLoader size={12} color="#ffffff" /> : title}
    </button>
  );
};
