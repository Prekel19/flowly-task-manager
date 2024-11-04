import { useRef, useState } from "react";
import { AuthContainer } from "../components/auth/AuthContainer";
import { AuthDivider } from "../components/auth/AuthDivider";
import { AuthHeader } from "../components/auth/AuthHeader";
import { AuthInput } from "../components/auth/AuthInput";
import { Button } from "../components/Button";
import { LightButton } from "../components/LightButton";
import { Logo } from "../components/Logo";
import { useGoogleSignIn } from "../hooks/useGoogleSignIn";
import { AuthRadioInputs } from "../components/auth/AuthRadioInputs";
import { useRegisterUser } from "../hooks/useRegisterUser";

export const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const err = useRef<string>("");

  const { registerUser, registerError } = useRegisterUser(name, email, password, role);
  if (registerError != "") {
    err.current = registerError;
  }

  const { signInWithGoogle, googleError } = useGoogleSignIn();
  if (googleError != "") {
    err.current = googleError;
  }

  return (
    <AuthContainer>
      <Logo />
      <AuthHeader title="Welcom to Flowly" subtitle="Enter your info to get started" />
      <LightButton title="Google" onClick={signInWithGoogle} />
      <AuthDivider />
      <AuthInput type="text" placeholder="First Name" onInputChange={setName} />
      <AuthInput type="text" placeholder="Email" onInputChange={setEmail} />
      <AuthInput type="password" placeholder="Password" onInputChange={setPassword} />
      <AuthRadioInputs onRadioChange={setRole} />
      {err.current != "" && <p className="text-sm">{err.current}</p>}
      <Button onClick={registerUser} title="Register" />
    </AuthContainer>
  );
};
