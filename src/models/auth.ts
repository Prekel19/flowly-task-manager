export type AuthResult = () => Promise<string | null | undefined>;

export type UseRegisterUserResult = {
  registerUser: () => Promise<void>;
  registerError: string;
};
