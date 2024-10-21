import { createContext, useContext } from "react";
import { User } from "../../types/user";

interface UserContext {
  user: User;
}

const UserContext = createContext<UserContext| undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContext");
  }
  return context;
};

export default UserContext;