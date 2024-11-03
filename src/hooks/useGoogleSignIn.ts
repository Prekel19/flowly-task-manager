import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { PopupErrors } from "../models/errors";

type UseGoogleSignInResult = {
  signInWithGoogle: () => Promise<void>;
  googleError: string;
};

export const useGoogleSignIn = (): UseGoogleSignInResult => {
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setError("");
      navigate("/");
    } catch (err) {
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case PopupErrors.POPUP_CLOSED_BY_USER:
            setError("Okno logowania zostało zamknięte");
            break;
          case PopupErrors.CANCELLED_POPUP_REQUEST:
            setError("Poprzednie żądanie logowania zostało anulowane");
            break;
          case PopupErrors.POPUP_BLOCKED:
            setError("Okno logowania zostało zablokowane przez przeglądarkę.");
            break;
          case PopupErrors.ACCOUNT_EXIST_WITH_DIFFRENT_CREDENTIAL:
            setError("Konto zostało już zarejestrowane innym sposobem logowania.");
            break;
          case PopupErrors.OPERATION_NOT_ALLOWED:
            setError("Logowanie za pomocą Google jest wyłączone.");
        }
      }
    }
  };

  return { signInWithGoogle, googleError: error };
};
