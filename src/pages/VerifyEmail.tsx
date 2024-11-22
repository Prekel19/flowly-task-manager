import { auth } from "../config/firebase";
import { applyActionCode } from "firebase/auth";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";

export const VerifyEmail = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  const verifyEmail = async (oobCode: string) => {
    try {
      await applyActionCode(auth, oobCode);
    } catch (err) {
      console.log(err);
      setMessage("Coś poszło nie tak, spróbuj jeszcze raz.");
    } finally {
      setLoading(false);
      setMessage("Weryfikacja przebiegła pomyślnie!");
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode");
    const oobCode = params.get("oobCode");

    if (mode === "verifyEmail" && oobCode) {
      verifyEmail(oobCode);
    }
  }, []);

  return (
    <div className="max-w-80 w-full min-h-56 flex flex-col items-center py-6 px-4 mt-8 mx-auto rounded-xl shadow-[0_0_30px_1px_rgba(0,0,0,0.1)]">
      {loading && <DotLoader size={50} color="#C9E8FF" />}
      {message && (
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-bold text-lg leading-tight">{message}</h2>
          <p className="text-sm">Teraz możesz się zalogować do swojego konta!</p>
        </div>
      )}
    </div>
  );
};
