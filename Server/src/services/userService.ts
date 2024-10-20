import { Repository } from "typeorm";
import dataSource from "../connection/datasource";
import { User } from "../entities/user";

const userRepository = dataSource.getRepository(User);

const getAllUsers = async (): Promise<User[]> => {
  const users: User[] = await userRepository.find();

  return users;
};

const addUser = async (user: User): Promise<void> => {
  await userRepository.save(user);
};

export { getAllUsers, addUser };
