import { Post } from "../types/post";

const serverIP = "http://192.168.1.120:3000/posts";

const getAllPosts = async () => {
  try {
    const response = await fetch(`${serverIP}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error; // Optionally re-throw the error if you want to handle it later
  }
};

const uploadPost = async (post: Post) => {
  try {
    const response = await fetch(`${serverIP}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response);
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error; // Optionally re-throw the error if you want to handle it later
  }
};

const findPostById = async (postId: number) => {
  try {
    const response = await fetch(`${serverIP}/${postId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
   console.log(response);
    const post = await response.json();

    return post;
  } catch (error) {
    console.log("Error fetching user: " + error);
  }
};
export { getAllPosts, uploadPost, findPostById };
