import { User } from "../entities/user";
import { getAllUsers, addUser, getUserByUsernameAndPassword, changeUserDetails } from "../services/userService";

const getAllUsersHandler = async () => {
  const users: User[] = await getAllUsers();
  return users;
};

const getUserByUsernameAndPasswordHandler = async (username: string, password: string) => {
  const user: User = await getUserByUsernameAndPassword(username, password);
  return user;
}

const addUserHandler = async (user: User) => {
  await addUser(user);
};

const changeUserDetailsHandler = async (userId: number, username: string, password: string, profilepic: string) => { 
  await changeUserDetails(userId, username, password, profilepic);
};

export { getAllUsersHandler, addUserHandler, getUserByUsernameAndPasswordHandler, changeUserDetailsHandler };
