import { useState, FC } from "react";
import { User } from "../../types/user";
import UserContext from "./userContext";
import { findUserByUsernameAndPassword } from "../../api/users";

interface UserProps {
  children: JSX.Element | JSX.Element[];
}

export const UserProvider: FC<UserProps> = ({ children }) => {

  const [user, setUser] = useState<User | null>(null);

  const logIn = (username: string, password: string) => {
    findUserByUsernameAndPassword(username, password).then((data) => {
      if (data) setUser(data);
      else alert("User doesn't exist!");
    });
  };

  const logOut = () => {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
