import { ButtonLink } from "@/components/ui/ButtonLink";

export const NotVerified = () => {
  return (
    <div className="flex flex-col items-center pt-8">
      <h2 className="font-bold">Your account is not verified.</h2>
      <p> Please verify your account and try again.</p>
      <ButtonLink linkTo="/login" className="mt-4">
        Back to login page
      </ButtonLink>
    </div>
  );
};
