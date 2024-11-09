import { HeaderProps } from "../../models/auth";

export const AuthHeader = ({ title, subtitle }: HeaderProps) => {
  return (
    <h2 className="flex flex-col text-2xl font-bold">
      {title}
      <span className="text-base font-normal">{subtitle}</span>
    </h2>
  );
};
