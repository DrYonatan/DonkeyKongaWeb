import { Post } from "./post";

export interface User {
    username: string;
    password: string;
    posts?: Post[];
}