import { signInWithEmailAndPassword } from "firebase/auth";
import { UserErrors } from "../models/errors";
import { FirebaseError } from "firebase/app";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { AuthResult } from "../models/auth";

export const useSignIn = (email: string, password: string): AuthResult => {
  const navigate = useNavigate();

  const signIn = async () => {
    if (email && password) {
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        const user = result.user;
        if (user.emailVerified) {
          navigate("/");
          return null;
        } else {
          return "Konto nie jest zweryfikowane.";
        }
      } catch (err: unknown) {
        if (err instanceof FirebaseError) {
          return getErrorMessage(err);
        } else {
          return "Nieznany błąd";
        }
      }
    } else {
      return "Wszystkie pola są obowiązkowe";
    }
  };

  return signIn;
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
