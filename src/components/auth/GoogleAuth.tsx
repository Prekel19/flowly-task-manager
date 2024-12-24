import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, googleProvider } from "@/config/firebase";
import { FirebaseError } from "firebase/app";
import { signInWithPopup } from "firebase/auth";
import { PopupErrors } from "@/models/errors";
import { Button } from "../ui/Button";

export const GoogleAuth = ({ error }: { error: (value: string) => void }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      if (err instanceof FirebaseError) {
        error(getErrorMessage(err));
      } else {
        error("Nieznany błąd");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      title="Google"
      darkTheme={false}
      isLoading={loading}
      onClick={signInWithGoogle}
    />
  );
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
