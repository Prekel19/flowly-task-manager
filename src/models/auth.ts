export interface User {
  user_id: string;
  role: string;
  team_id?: string;
  verified: boolean;
}

export type AuthResult = () => Promise<string | null>;

export interface HeaderProps {
  title: string;
  subtitle: string;
}

export interface InputProps {
  type: string;
  placeholder: string;
  onInputChange: (value: string) => void;
}

export interface SelectProps {
  onSelectChange: (value: string) => void;
}
