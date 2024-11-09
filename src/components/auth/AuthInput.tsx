import { InputProps } from "../../models/auth";

export const AuthInput = ({ type, placeholder, onInputChange }: InputProps) => {
  return (
    <input
      className="border border-slate-200 rounded-lg text-sm px-2 py-1 check-input"
      type={type}
      placeholder={placeholder}
      onChange={(e) => onInputChange(e.target.value)}
    />
  );
};
