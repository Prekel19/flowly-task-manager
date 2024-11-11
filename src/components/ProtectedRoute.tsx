import { PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscirbe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.emailVerified) {
          setIsVerified(true);
        } else {
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    });

    return () => unsubscirbe();
  }, [navigate]);

  return isVerified && children;
};
