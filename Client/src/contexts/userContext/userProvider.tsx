import { useState, FC } from "react";
import { User } from "../../types/user";
import UserContext from "./userContext";
import { findUserByUsernameAndPassword } from "../../api/users";


interface UserProps {
  children: JSX.Element | JSX.Element[];
}

export const UserProvider: FC<UserProps> = ({ children }) => {
 
  const defaultUser: User = {username: "", password: ""};

  const [user, setUser] = useState<User>(defaultUser);

  const logIn = (username: string, password: string) => {
    findUserByUsernameAndPassword(username, password).then((data) => {
      setUser(data)
    });
  };

  return (
    <UserContext.Provider value={{ user, logIn }}>
      {children}
    </UserContext.Provider>
  );
};