import { User } from "@/entities/user";
import { DataSource } from "typeorm";
import pg from "pg";
import { Post } from "@/entities/post";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  entities: [User, Post],
  synchronize: false,
  logging: false,
  driver: pg,
  schema: "public",
});

export default dataSource;
