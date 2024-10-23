import { createContext, useContext } from "react";
import { User } from "../../types/user";

interface UserContext {
  user: User;
  logIn: (username: string, password: string) => void;
}

const UserContext = createContext<UserContext| undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContext");
  }
  console.log(context);
  return context;
};

export default UserContext;