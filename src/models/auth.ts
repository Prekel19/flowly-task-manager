export type UseSignInResult = {
  signIn: () => Promise<void>;
  signInError: string;
};

export type UseGoogleSignInResult = {
  signInWithGoogle: () => Promise<void>;
  googleError: string;
};

export type UseRegisterUserResult = {
  registerUser: () => Promise<void>;
  registerError: string;
};
