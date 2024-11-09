import { Link } from "react-router-dom";

export const AuthRedirect = ({
  description,
  linkTo,
}: {
  description: string;
  linkTo: string;
}) => {
  return (
    <div>
      <p className="text-xs">
        {description}
        <Link to={`/${linkTo.toLowerCase()}`} className="text-primary1">
          {" "}
          {linkTo.charAt(0).toUpperCase() + linkTo.slice(1)} here
        </Link>
      </p>
    </div>
  );
};
