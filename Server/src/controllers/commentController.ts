import { PostComment } from "@/entities/comment"
import { Post } from "@/entities/post";
import { getCommentsByPost } from "@/services/commentService"

const getCommentsByPostHandler = async (post: Post) => {
    const comments: PostComment[] = await getCommentsByPost(post);
    return comments;
}

export { getCommentsByPostHandler };