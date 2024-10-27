import { User } from "@/entities/user";
import { DataSource } from "typeorm";
import pg from "pg";
import { Post } from "@/entities/post";
import { PostComment } from "@/entities/comment";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  entities: [User, Post, PostComment],
  synchronize: false,
  logging: false,
  driver: pg,
  schema: "public",
});

export default dataSource;
