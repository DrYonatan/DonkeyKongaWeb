import { uploadCommentHandler } from "@/controllers/commentController";
import { PostComment } from "@/entities/comment";
import express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.post("", async (req: Request, res: Response) => {
  const comment: PostComment = req.body;
  await uploadCommentHandler(comment);
  res.status(201).send("Comment was uploaded succesfully");
});

export default router;
