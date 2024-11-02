import { ChangeEventHandler } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const AuthInput = ({ type, placeholder, onChange }: InputProps) => {
  return (
    <input
      className="border border-slate-200 rounded-lg"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
