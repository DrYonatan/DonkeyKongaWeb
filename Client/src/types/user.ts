import { Post } from "./post";

export interface User {
    id?: number;
    username: string;
    password: string;
    profilepic: string;
    posts?: Post[];
}