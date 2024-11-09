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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = useSignIn(email, password);
  const signInWithGoogle = useGoogleSignIn();

  const handleLogin = async () => {
    const result = await signIn();
    if (result) {
      checkInputs();
      setError(result);
    } else {
      setError(null);
    }

    setLoading(false);
  };

  const handleGoogleAuth = async () => {
    const result = await signInWithGoogle();
    if (result) {
      setError(result);
    } else {
      setError(null);
    }
  };

  const checkInputs = () => {
    const checkInput: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".check-input");

    checkInput.forEach((input) => {
      if (input.value === "") {
        input.classList.add("input-error");
      } else {
        input.classList.remove("input-error");
      }
    });
  };

  return (
    <AuthContainer>
      <Logo />
      <AuthHeader title="Welcom to Flowly" subtitle="Enter your info to get started" />
      <LightButton title="Google" onClick={handleGoogleAuth} />
      <AuthDivider />
      <AuthInput type="text" placeholder="Email" onInputChange={setEmail} />
      <AuthInput type="password" placeholder="Password" onInputChange={setPassword} />
      {error && <p className="text-sm">{error}</p>}
      <Button
        onClick={() => {
          setLoading(true);
          handleLogin();
        }}
        isLoading={loading}
        title="Login"
      />
    </AuthContainer>
  );
};
