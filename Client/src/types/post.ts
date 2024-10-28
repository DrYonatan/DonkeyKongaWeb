import { User } from "./user";
import { PostComment } from "./comment";

export interface Post {
  id?: number;
  date: Date;
  title: string;
  content: string;
  image: string;
  poster: User;
  comments: PostComment[];
}
