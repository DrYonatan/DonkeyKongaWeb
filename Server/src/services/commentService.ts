import dataSource from "@/connection/datasource";
import { PostComment } from "@/entities/comment";
import { Post } from "@/entities/post";

const commentRepository = dataSource.getRepository(PostComment);

const getCommentsByPost = async (post: Post): Promise<PostComment[]> => {
    const comments: PostComment[] = await commentRepository.findBy({
        post: post
    })
    return comments;
}

export { getCommentsByPost };