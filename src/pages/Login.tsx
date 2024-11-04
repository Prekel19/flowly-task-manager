import { useRef, useState } from "react";
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
  const error = useRef<string>("");

  const { signIn, signInError } = useSignIn(email, password);
  if (signInError != "") error.current = signInError;
  const { signInWithGoogle, googleError } = useGoogleSignIn();
  if (googleError != "") error.current = googleError;

  return (
    <AuthContainer>
      <Logo />
      <AuthHeader title="Welcom to Flowly" subtitle="Enter your info to get started" />
      <LightButton title="Google" onClick={signInWithGoogle} />
      <AuthDivider />
      <AuthInput type="text" placeholder="Email" onInputChange={setEmail} />
      <AuthInput type="password" placeholder="Password" onInputChange={setPassword} />
      {error.current != "" && <p className="text-sm">{error.current}</p>}
      <Button onClick={signIn} title="Login" />
    </AuthContainer>
  );
};
