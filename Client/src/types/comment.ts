import { User } from "./user";
import { Post } from "./post";

export interface PostComment {
  id?: number;
  date: Date;
  content: string;
  commenter: User;
  post?: Post;
}
