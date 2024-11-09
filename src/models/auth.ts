export type AuthResult = () => Promise<string | null | undefined>;

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
