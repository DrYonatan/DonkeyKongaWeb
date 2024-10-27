import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity("posts")
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "text" })
  content: string;

  @Column({ type: "text" })
  image: string;

  @ManyToOne(() => User, (user: User) => user.posts, {eager: true, nullable: false})
  @JoinColumn({name: "poster_id"})
  poster: User;
}
