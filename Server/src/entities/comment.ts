import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { User } from "./user";
import { Post } from "./post";

@Entity("comments")
export class PostComment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp" })
  date: Timestamp;

  @Column({ type: "text" })
  content: string;

  @ManyToOne(() => User, (user: User) => user.comments, {eager: true, nullable: false})
  @JoinColumn({name: "commenter_id"})
  commenter: User;

  @ManyToOne(() => Post, (post: Post) => post.comments, {eager: true, nullable: false})
  @JoinColumn({name: "post_id"})
  post: Post;
}
