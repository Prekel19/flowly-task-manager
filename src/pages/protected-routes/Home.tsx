import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { TeamContainer } from "@/components/home/TeamContainer";
import { Container } from "@/components/ui/Container";

export const Home = () => {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <Container>
      <div className="grid grid-cols-3 gap-6">
        <TeamContainer />
      </div>
    </Container>
  );
};
