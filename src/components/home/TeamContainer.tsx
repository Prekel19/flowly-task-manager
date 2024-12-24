import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { ContentContainer } from "../ui/ContentContainer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useUserContext } from "@/hooks/useUserContext";

export const TeamContainer = () => {
  const user = useUserContext();

  return (
    <ContentContainer>
      <Link to="/team" className="p-3">
        <h3 className="text-xl mb-2">Twój zespół</h3>
        <div className="flex flex-col gap-2">
          {user.team_id ? (
            <HasTeam teamID={user.team_id} />
          ) : (
            <WithoutTeam role={user.role} />
          )}
        </div>
      </Link>
    </ContentContainer>
  );
};

const HasTeam = ({ teamID }: { teamID: string }) => {
  const [members, setMembers] = useState<number | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      const result = await getDoc(doc(db, "teams", teamID));
      const teamSnap = result.data();

      if (teamSnap) {
        setMembers(teamSnap.members);
      }
    };

    fetchMembers();
  }, [teamID]);

  return (
    <>
      <p className="text-sm">{members} osób</p>
      <p className="text-xs text-gray-300">Zobacz liste osób</p>
    </>
  );
};

const WithoutTeam = ({ role }: { role: string }) => {
  return (
    <>
      <p className="text-sm">
        {role === "leader"
          ? "Nie stworzyłeś jeszcze zespołu"
          : "Nie dołączyłeś jeszcze do żadnego zespołu"}
      </p>
      <p className="text-xs text-gray-300">
        {role === "leader" ? "Kliknij, żeby stworzyć" : "Kliknij, żeby dołączyć"}
      </p>
    </>
  );
};
