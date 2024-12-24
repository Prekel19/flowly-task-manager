import { useState } from "react";
import { useCheckInputs } from "@/hooks/useCheckInputs";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { RegisterErrors } from "@/models/errors";

import { AuthContainer } from "@/components/auth/AuthContainer";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { GoogleAuth } from "@/components/auth/GoogleAuth";
import { AuthDivider } from "@/components/auth/AuthDivider";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthSelectRole } from "@/components/auth/AuthSelectRole";
import { Button } from "@/components/ui/Button";
import { AuthRedirect } from "@/components/auth/AuthRedirect";

export const Register = () => {
  return (
    <AuthContainer>
      <AuthHeader title="Welcom to Flowly" subtitle="Enter your info to get started" />
      <RegisterForm />
      <AuthRedirect description="You already have an account?" linkTo="login" />
    </AuthContainer>
  );
};

const RegisterForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const checkInputs = useCheckInputs();

  const registerUser = async () => {
    checkInputs();
    if (name && email && password && role) {
      try {
        setLoading(true);
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const user = result.user;

        setUserData(user, name, role);
        setSuccess(
          "Rejestracja przebiegła pomyślnie. Link weryfikacyjny został wysłany na podany adres email."
        );
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
      <AuthInput type="text" placeholder="First Name" onInputChange={setName} />
      <AuthInput type="text" placeholder="Email" onInputChange={setEmail} />
      <AuthInput type="password" placeholder="Password" onInputChange={setPassword} />
      <AuthSelectRole onSelectChange={setRole} />
      {error && <p className="text-xs text-red-600 leading-tight">{error}</p>}
      {success && <p className="text-xs text-green-600 leading-tight">{success}</p>}
      <Button title="Register" darkTheme isLoading={loading} onClick={registerUser} />
    </>
  );
};

const setUserData = async (user: User, name: string, role: string, teamID?: string) => {
  await updateProfile(user, { displayName: name });
  await sendEmailVerification(user);
  await setDoc(doc(db, "users", user.uid), {
    user_id: user.uid,
    role: role,
    team_id: teamID ? teamID : "",
    verified: false,
  });
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
