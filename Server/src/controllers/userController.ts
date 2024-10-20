import { User } from "../entities/user";
import { getAllUsers, addUser } from "../services/userService";

const getAllUsersHandler = async () => {
  const users: User[] = await getAllUsers();
  return users;
};

const addUserHandler = async (user: User) => {
  await addUser(user);
};

export { getAllUsersHandler, addUserHandler };
