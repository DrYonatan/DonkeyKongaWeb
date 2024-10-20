import { getAllPostsHandler, uploadPostHandler } from "@/controllers/postController";
import { Post } from "@/entities/post";
import express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.get("", async (req: Request, res: Response) => {
  const posts = await getAllPostsHandler();
  res.status(200).send(posts);
});

router.post("", async (req: Request, res: Response) => {
  const post: Post = req.body;
  await uploadPostHandler(post);
  res.status(201).send("Post was uploaded succesfully");
});

export default router;
