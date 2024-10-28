import { Post } from "../types/post";

const serverIP = "http://192.168.1.120:3000/comments";

const findCommentsByPost = async (post: Post) => {
  try {
    const response = await fetch(`${serverIP}/post`, {
        body: JSON.stringify(post),
      });
    if (!response.ok) {
      throw new Error(`HTTP error! status ${response.status}`);
    }
    console.log(response);
    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error("Error fetching comments: ", error);
    throw error; // Optionally re-throw the error if you want to handle it later
  }
};

export { findCommentsByPost };