import { ChangeEventHandler } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const AuthInput = ({ type, placeholder, onChange }: InputProps) => {
  return (
    <input
      className="border border-slate-200 rounded-lg text-sm px-2 py-1"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
