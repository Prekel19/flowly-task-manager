import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { UserErrors } from "../models/errors";
import { FirebaseError } from "firebase/app";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

type UseSignInResult = {
  signIn: () => Promise<void>;
  error: string;
};

export const useSignIn = (email: string, password: string): UseSignInResult => {
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case UserErrors.INVALID_EMAIL:
            setError("Nie poprawny format e-mail");
            break;
          case UserErrors.USER_NOT_FOUND:
            setError(" Użytkownik o podanym e-mailu nie istnieje");
            break;
          case UserErrors.WRONG_PASSWORD:
            setError("Hasło jest niepoprawne");
            break;
          case UserErrors.NETWORK_REQUEST_FAILED:
            setError("Problemy z połączeniem sieciowym");
        }
      }
    }
  };

  return { signIn, error };
};
