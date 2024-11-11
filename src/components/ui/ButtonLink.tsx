import { Link } from "react-router-dom";
import { ButtonLinkProps } from "../../models/types";

export const ButtonLink = ({ children, linkTo, className }: ButtonLinkProps) => {
  return (
    <Link
      to={linkTo}
      className={`min-h-8 flex items-center justify-center bg-primary1 font-medium text-white rounded-lg py-1 px-4 cursor-pointer hover:bg-secondary1 transition duration-200 ${className}`}
    >
      {children}
    </Link>
  );
};
