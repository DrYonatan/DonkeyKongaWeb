import { User } from "./user";

export interface Post {
  id: number;
  date: Date;
  title: string;
  content: string;
  image: string;
  poster: User;
}
