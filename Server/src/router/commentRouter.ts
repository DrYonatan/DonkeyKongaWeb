import { getCommentsByPostHandler } from "@/controllers/commentController";
import { PostComment } from "@/entities/comment";
import { Post } from "@/entities/post";
import express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.get("/post", async (req: Request, res: Response) => {
    const post: Post = req.body.post;
    const comments: PostComment[] = await getCommentsByPostHandler(post);
    res.json(comments);
})

export default router;
