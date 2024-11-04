import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { PopupErrors } from "../models/errors";
import { UseGoogleSignInResult } from "../models/auth";

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
        setError(getErrorMessage(err));
      }
    }
  };

  return { signInWithGoogle, googleError: error };
};

const getErrorMessage = (err: FirebaseError): string => {
  switch (err.code) {
    case PopupErrors.POPUP_CLOSED_BY_USER:
      return "Okno logowania zostało zamknięte";
    case PopupErrors.CANCELLED_POPUP_REQUEST:
      return "Poprzednie żądanie logowania zostało anulowane";
    case PopupErrors.POPUP_BLOCKED:
      return "Okno logowania zostało zablokowane przez przeglądarkę.";
    case PopupErrors.ACCOUNT_EXIST_WITH_DIFFRENT_CREDENTIAL:
      return "Konto zostało już zarejestrowane innym sposobem logowania.";
    case PopupErrors.OPERATION_NOT_ALLOWED:
      return "Logowanie za pomocą Google jest wyłączone.";
    default:
      return "Wystąpił nieznany błąd";
  }
};
