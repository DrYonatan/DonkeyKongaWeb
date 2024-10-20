import express from "express";
import {Request, Response} from "express";
import {addUserHandler, getAllUsersHandler} from "../controllers/userController"
import { User } from "@/entities/user";

const router = express.Router();

router.get("", async (req: Request, res: Response) => {
    const users = await getAllUsersHandler();
    res.json(users); 
});

router.post("", async (req: Request, res: Response) => {
    const user: User = req.body;
    await addUserHandler(user);
    res.status(201).send("User was created succesfully");
  });

export default router;