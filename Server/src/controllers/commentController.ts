import { PostComment } from "@/entities/comment";
import { Post } from "@/entities/post";
import { uploadComment } from "@/services/commentService";

const uploadCommentHandler = async (comment: PostComment) => {
  uploadComment(comment);
};

export { uploadCommentHandler };
