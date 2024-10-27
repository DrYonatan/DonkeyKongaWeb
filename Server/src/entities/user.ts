import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post";
import { PostComment } from "./comment"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "text"})
  username: string;

  @Column({type: "text"})
  password: string;

  @Column({type: "text"})
  profilepic: string;

  @OneToMany(() => Post, (post: Post) => post.poster)
  posts: Post[];

  @OneToMany(() => PostComment, (comment: PostComment) => comment.commenter)
  comments: PostComment[];
}

