import { SelectProps } from "../../models/auth";

export const AuthSelectRole = ({ onSelectChange }: SelectProps) => {
  return (
    <select
      name="setRole"
      defaultValue=""
      onChange={(e) => onSelectChange(e.target.value)}
      className="text-sm px-2 py-1 border border-slate-200 rounded-lg bg-transparent check-input *:text-sm"
    >
      <option value="" disabled>
        Select
      </option>
      <option value="employee">Employee</option>
      <option value="leader">Leader</option>
    </select>
  );
};
