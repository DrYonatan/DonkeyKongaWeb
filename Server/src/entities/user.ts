import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post";

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
}

