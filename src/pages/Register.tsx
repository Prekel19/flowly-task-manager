import { useState } from "react";
import { useGoogleSignIn } from "../hooks/useGoogleSignIn";
import { AuthSelectRole } from "../components/auth/AuthSelectRole";
import { useRegisterUser } from "../hooks/useRegisterUser";
import { useCheckInputs } from "../hooks/useCheckInputs";

import { AuthContainer } from "../components/auth/AuthContainer";
import { AuthHeader } from "../components/auth/AuthHeader";
import { AuthDivider } from "../components/auth/AuthDivider";
import { AuthInput } from "../components/auth/AuthInput";
import { Button } from "../components/ui/Button";
import { AuthRedirect } from "../components/auth/AuthRedirect";

export const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{
    error: string | null;
    success: string | null;
  }>({
    error: null,
    success: null,
  });

  const signInWithGoogle = useGoogleSignIn();
  const registerUser = useRegisterUser(name, email, password, role);
  const checkInputs = useCheckInputs();

  const handleRegister = async () => {
    const result = await registerUser();
    checkInputs();

    setMessage({
      success:
        result == null
          ? "Rejestracja przebiegła pomyślnie. Link weryfikacyjny został wysłany na podany adres email."
          : null,
      error: result,
    });
    setLoading(false);
  };

  const handleGoogleAuth = async () => {
    const result = await signInWithGoogle();
    setMessage({ ...message, error: result ? result : null });
    setLoading(false);
  };

  return (
    <AuthContainer>
      <AuthHeader title="Welcom to Flowly" subtitle="Enter your info to get started" />
      <Button
        title="Google"
        darkTheme={false}
        onClick={() => {
          setLoading(true);
          handleGoogleAuth();
        }}
      />
      <AuthDivider />
      <AuthInput type="text" placeholder="First Name" onInputChange={setName} />
      <AuthInput type="text" placeholder="Email" onInputChange={setEmail} />
      <AuthInput type="password" placeholder="Password" onInputChange={setPassword} />
      <AuthSelectRole onSelectChange={setRole} />
      {message.error && (
        <p className="text-xs text-red-600 leading-tight">{message.error}</p>
      )}
      {message.success && (
        <p className="text-xs text-green-600 leading-tight">{message.success}</p>
      )}
      <Button
        title="Register"
        darkTheme
        isLoading={loading}
        onClick={() => {
          setLoading(true);
          handleRegister();
        }}
      />
      <AuthRedirect description="You already have an account?" linkTo="login" />
    </AuthContainer>
  );
};
