import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { UserErrors } from "../models/errors";
import { FirebaseError } from "firebase/app";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { UseSignInResult } from "../models/auth";

export const useSignIn = (email: string, password: string): UseSignInResult => {
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const signIn = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setError("");
        navigate("/");
      } catch (err: unknown) {
        if (err instanceof FirebaseError) {
          setError(getErrorMessage(err));
        }
      }
    } else {
      setError("Pola formularza nie są uzupełnione");
    }
  };

  return { signIn, signInError: error };
};

const getErrorMessage = (err: FirebaseError): string => {
  switch (err.code) {
    case UserErrors.INVALID_EMAIL:
      return "Nie poprawny format e-mail";
    case UserErrors.USER_NOT_FOUND:
      return " Użytkownik o podanym e-mailu nie istnieje";
    case UserErrors.WRONG_PASSWORD:
      return "Hasło jest niepoprawne";
    case UserErrors.NETWORK_REQUEST_FAILED:
      return "Problemy z połączeniem sieciowym";
    default:
      return "Wystąpił nieznany błąd";
  }
};
