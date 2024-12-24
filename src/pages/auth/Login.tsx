import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { UserErrors } from "@/models/errors";
import { useCheckInputs } from "@/hooks/useCheckInputs";

import { AuthContainer } from "@/components/auth/AuthContainer";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { GoogleAuth } from "@/components/auth/GoogleAuth";
import { AuthDivider } from "@/components/auth/AuthDivider";
import { AuthInput } from "@/components/auth/AuthInput";
import { Button } from "@/components/ui/Button";
import { AuthRedirect } from "@/components/auth/AuthRedirect";

export const Login = () => {
  return (
    <AuthContainer>
      <AuthHeader title="Welcom to Flowly" subtitle="Login to get started" />
      <LoginForm />
      <AuthRedirect description="You don't have an account yet?" linkTo="register" />
    </AuthContainer>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const checkInputs = useCheckInputs();
  const navigate = useNavigate();

  const signIn = async () => {
    checkInputs();
    if (email && password) {
      try {
        setLoading(true);
        const result = await signInWithEmailAndPassword(auth, email, password);
        const user = result.user;

        if (user.emailVerified) {
          navigate("/");
          await setUserVerification(user);
        } else {
          setError("Konto nie jest zweryfikowane.");
        }
      } catch (err: unknown) {
        if (err instanceof FirebaseError) {
          setError(getErrorMessage(err));
        } else {
          setError("Nieznany błąd");
        }
      } finally {
        setLoading(false);
      }
    } else {
      setError("Wszystkie pola są obowiązkowe");
    }
  };

  return (
    <>
      <GoogleAuth error={setError} />
      <AuthDivider />
      <AuthInput type="text" placeholder="Email" onInputChange={setEmail} />
      <AuthInput type="password" placeholder="Password" onInputChange={setPassword} />
      {error && <p className="text-xs text-red-600 leading-tight">{error}</p>}
      <Button title="Login" darkTheme isLoading={loading} onClick={signIn} />
    </>
  );
};

const setUserVerification = async (user: User) => {
  const verificationStatus: boolean = JSON.parse(
    localStorage.getItem("isVerified") ?? "false"
  );

  if (!verificationStatus) {
    const userDoc = doc(db, "users", user.uid);
    localStorage.setItem("isVerified", JSON.stringify(true));
    await updateDoc(userDoc, {
      verified: true,
    });
  }
};

const getErrorMessage = (err: FirebaseError): string => {
  console.log(err.code);
  switch (err.code) {
    case UserErrors.INVALID_EMAIL:
      return "Nie poprawny format e-mail";
    case UserErrors.INVALID_CREDENTIAL:
      return "Nie udało się zalogować. Proszę upewnić się, że podane dane są poprawne, i spróbować ponownie.";
    case UserErrors.USER_NOT_FOUND:
      return "Użytkownik o podanym e-mailu nie istnieje";
    case UserErrors.WRONG_PASSWORD:
      return "Hasło jest niepoprawne";
    case UserErrors.NETWORK_REQUEST_FAILED:
      return "Problemy z połączeniem sieciowym";
    default:
      return "Wystąpił nieznany błąd";
  }
};
