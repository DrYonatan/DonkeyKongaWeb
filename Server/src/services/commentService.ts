import dataSource from "@/connection/datasource";
import { PostComment } from "@/entities/comment";

const commentRepository = dataSource.getRepository(PostComment);

const uploadComment = async (comment: PostComment) => {
  commentRepository.save(comment);
};

export { uploadComment };
