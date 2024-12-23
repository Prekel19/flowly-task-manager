import { PropsWithChildren, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { User } from "@/models/auth";
import { UserContext } from "@/context/UserContext";

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const user = auth.currentUser;

      if (!currentUser && user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const result = await getDoc(userRef);
          const userSnap = result.data();

          if (userSnap) {
            const userData: User = {
              user_id: userSnap.user_id,
              role: userSnap.role,
              team_id: userSnap.team_id,
              verified: userSnap.verified,
            };
            setCurrentUser(userData);
          } else {
            throw new Error("Wystąpił błąd przy pobieraniu użytkownika z bazy danych.");
          }
        } catch (err) {
          console.log(err);
        }
      }
    };

    getUser();
  }, [currentUser]);

  if (currentUser) {
    return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
  }
};
