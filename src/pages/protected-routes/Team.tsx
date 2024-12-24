import { Container } from "@/components/ui/Container";
import { ContentContainer } from "@/components/ui/ContentContainer";
import { useUserContext } from "@/hooks/useUserContext";

export const Team = () => {
  const user = useUserContext();

  return <Container>{user.team_id ? <TeamList /> : <CreateTeam />}</Container>;
};

const CreateTeam = () => {
  return (
    <ContentContainer customClass="p-3">
      <h3>Stwórz swój zespół</h3>
    </ContentContainer>
  );
};

const TeamList = () => {
  return <ContentContainer>aaa</ContentContainer>;
};
