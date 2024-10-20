import { Repository } from "typeorm";
import dataSource from "../connection/datasource";
import { Post } from "../entities/post";
import { User } from "@/entities/user";

const postRepository = dataSource.getRepository(Post);

const getAllPosts = async (): Promise<Post[]> => {
  const posts: Post[] = await postRepository.find();

  return posts;
};

const uploadPost = async (post: Post): Promise<void> => {
  await postRepository.create(post);
}

export { getAllPosts, uploadPost };
