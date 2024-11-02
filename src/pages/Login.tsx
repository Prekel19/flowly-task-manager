import { useState } from "react";
import { AuthContainer } from "../components/Auth/AuthContainer";
import { Logo } from "../components/Logo";
import { Button } from "../components/Button";
import { AuthInput } from "../components/Auth/AuthInput";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <AuthContainer>
      <Logo />
      <h2 className="flex flex-col text-2xl font-bold">
        Welcome to Flowly
        <span className="text-base font-normal">Enter your info to get started</span>
      </h2>
      <AuthInput
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <AuthInput
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={signIn} title="Login" />
    </AuthContainer>
  );
};
