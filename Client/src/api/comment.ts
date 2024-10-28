import { PostComment } from "../types/comment";

const serverIP = "http://192.168.1.120:3000/comments";

const uploadComment = async (comment: PostComment) => {
  try {
    const response = await fetch(`${serverIP}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response);
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error; // Optionally re-throw the error if you want to handle it later
  }
};

export { uploadComment };