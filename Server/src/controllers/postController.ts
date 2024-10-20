import { Post } from "../entities/post";
import { getAllPosts, uploadPost } from "@/services/postService";

const getAllPostsHandler = async () => {
  const posts: Post[] = await getAllPosts();
  return posts;
};

const uploadPostHandler = async (post: Post) => {
  await uploadPost(post);
}

export { getAllPostsHandler, uploadPostHandler };
