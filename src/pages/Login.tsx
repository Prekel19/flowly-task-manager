import { useState } from "react";
import { AuthContainer } from "../components/auth/AuthContainer";
import { Logo } from "../components/Logo";
import { Button } from "../components/Button";
import { LightButton } from "../components/LightButton";
import { AuthInput } from "../components/auth/AuthInput";
import { AuthHeader } from "../components/auth/AuthHeader";
import { AuthDivider } from "../components/auth/AuthDivider";
import { useGoogleSignIn } from "../hooks/useGoogleSignIn";
import { useSignIn } from "../hooks/useSignIn";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signIn, error } = useSignIn(email, password);
  const { signInWithGoogle, googleError } = useGoogleSignIn();

  return (
    <AuthContainer>
      <Logo />
      <AuthHeader title="Welcom to Flowly" subtitle="Enter your info to get started" />
      <LightButton title="Google" onClick={signInWithGoogle} />
      <AuthDivider />
      <AuthInput
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <AuthInput
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {error != "" && <p className="text-sm">{error}</p>}
      {googleError != "" && <p className="text-sm">{googleError}</p>}
      <Button onClick={signIn} title="Login" />
    </AuthContainer>
  );
};
