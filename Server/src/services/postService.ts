import dataSource from "../connection/datasource";
import { Post } from "../entities/post";

const postRepository = dataSource.getRepository(Post);

const getAllPosts = async (): Promise<Post[]> => {
  const posts: Post[] = await postRepository.find();

  return posts;
};

const getPostById = async (id: number): Promise<Post> => {
  const post: Post = await postRepository.findOneBy({
    id: id,
  });
  return post;
};

const uploadPost = async (post: Post): Promise<void> => {
  await postRepository.save(post);
};

export { getAllPosts, uploadPost, getPostById };
