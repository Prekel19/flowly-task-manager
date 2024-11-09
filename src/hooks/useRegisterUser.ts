import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { RegisterErrors } from "../models/errors";
import { AuthResult } from "../models/auth";

export const useRegisterUser = (
  name: string,
  email: string,
  password: string,
  role: string
): AuthResult => {
  const registerUser = async () => {
    if (name && email && password && role) {
      try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const user = result.user;

        await updateProfile(user, { displayName: name });
        await setDoc(doc(db, "users", user.uid), { role: role });
      } catch (err: unknown) {
        if (err instanceof FirebaseError) {
          return getErrorMessage(err);
        }
      }
    } else {
      return "Wszystkie pola są obowiązkowe";
    }
  };

  return registerUser;
};

const getErrorMessage = (err: FirebaseError): string => {
  switch (err.code) {
    case RegisterErrors.EMAIL_ALREADY_IN_USE:
      return "Podany email jest już zarejestrowany";
    case RegisterErrors.INVALID_EMAIL:
      return "Niepoprawny format adresu email";
    case RegisterErrors.WEAK_PASSWORD:
      return "Hasło musi mieć co najmniej 6 znaków";
    case RegisterErrors.PERMISSION_DENIED:
      return "Brak uprawnień do wykonania operacji.";
    case RegisterErrors.NOT_FOUND:
      return "Dokument lub kolekcja nie istnieje.";
    default:
      return "Wystąpił nieznany błąd";
  }
};
