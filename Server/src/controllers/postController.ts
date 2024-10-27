import { Post } from "../entities/post";
import { getAllPosts, getPostById, uploadPost } from "@/services/postService";

const getAllPostsHandler = async () => {
  const posts: Post[] = await getAllPosts();
  return posts;
};

const getPostbyIdHandler = async (id: number) => {
  const post: Post = await getPostById(id);
  return post;
}

const uploadPostHandler = async (post: Post) => {
  await uploadPost(post);
};

export { getAllPostsHandler, uploadPostHandler, getPostbyIdHandler };
