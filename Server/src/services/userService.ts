import { Repository } from "typeorm";
import dataSource from "../connection/datasource";
import { User } from "../entities/user";

const userRepository = dataSource.getRepository(User);

const getAllUsers = async (): Promise<User[]> => {
  const users: User[] = await userRepository.find();

  return users;
};

const getUserByUsernameAndPassword = async (
  username: string,
  password: string
): Promise<User> => {
  const user: User = await userRepository.findOneBy({
    username: username,
    password: password,
  });
  return user;
};

const addUser = async (user: User): Promise<void> => {
  await userRepository.save(user);
};

export { getAllUsers, addUser, getUserByUsernameAndPassword };
