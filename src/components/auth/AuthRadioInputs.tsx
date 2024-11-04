import { ChangeEvent } from "react";

export const AuthRadioInputs = ({
  onRadioChange,
}: {
  onRadioChange: (value: string) => void;
}) => {
  return (
    <div className="flex items-center">
      <input
        id="employee"
        name="role"
        type="radio"
        value="employee"
        className="cursor-pointer"
        onChange={(e: ChangeEvent<HTMLInputElement>) => onRadioChange(e.target.value)}
      />
      <label htmlFor="employee" className="text-sm pr-4 pl-2">
        Employee
      </label>
      <input
        id="leader"
        name="role"
        type="radio"
        value="leader"
        className="cursor-pointer"
        onChange={(e: ChangeEvent<HTMLInputElement>) => onRadioChange(e.target.value)}
      />
      <label htmlFor="leader" className="text-sm pl-2">
        Leader
      </label>
    </div>
  );
};
