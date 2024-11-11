import { useState } from "react";
import { useGoogleSignIn } from "../hooks/useGoogleSignIn";
import { useSignIn } from "../hooks/useSignIn";
import { useCheckInputs } from "../hooks/useCheckInputs";
import { AuthRedirect } from "../components/auth/AuthRedirect";

import { AuthContainer } from "../components/auth/AuthContainer";
import { AuthHeader } from "../components/auth/AuthHeader";
import { AuthDivider } from "../components/auth/AuthDivider";
import { AuthInput } from "../components/auth/AuthInput";
import { Button } from "../components/ui/Button";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = useSignIn(email, password);
  const signInWithGoogle = useGoogleSignIn();
  const checkInputs = useCheckInputs();

  const handleLogin = async () => {
    const result = await signIn();
    checkInputs();

    setError(result ? result : null);
    setLoading(false);
  };

  const handleGoogleAuth = async () => {
    const result = await signInWithGoogle();
    setError(result ? result : null);
    setLoading(false);
  };

  return (
    <AuthContainer>
      <AuthHeader title="Welcom to Flowly" subtitle="Login to get started" />
      <Button
        title="Google"
        darkTheme={false}
        onClick={() => {
          setLoading(true);
          handleGoogleAuth();
        }}
      />
      <AuthDivider />
      <AuthInput type="text" placeholder="Email" onInputChange={setEmail} />
      <AuthInput type="password" placeholder="Password" onInputChange={setPassword} />
      {error && <p className="text-xs text-red-600 leading-tight">{error}</p>}
      <Button
        title="Login"
        darkTheme
        isLoading={loading}
        onClick={() => {
          setLoading(true);
          handleLogin();
        }}
      />
      <AuthRedirect description="You don't have an account yet?" linkTo="register" />
    </AuthContainer>
  );
};
