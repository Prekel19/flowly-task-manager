import { createContext } from "react";

import { User } from "../models/auth";

const defaultVal: User = {
  user_id: "",
  role: "",
  team_id: "",
  verified: false,
};

export const UserContext = createContext<User | null>(defaultVal);
