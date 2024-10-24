import express from "express";
import {Request, Response} from "express";
import {addUserHandler, getAllUsersHandler, getUserByUsernameAndPasswordHandler} from "../controllers/userController"
import { User } from "@/entities/user";
import { changeUserDetails } from "@/services/userService";

const router = express.Router();

router.get("", async (req: Request, res: Response) => {
    const users = await getAllUsersHandler();
    res.json(users); 
});

router.get(`/user/:username/:password`, async (req: Request, res: Response) => {
    const username: string = req.params.username;
    const password: string = req.params.password;
    const user = await getUserByUsernameAndPasswordHandler(username, password);
    res.json(user);
});

router.post("", async (req: Request, res: Response) => {
    const user: User = req.body;
    await addUserHandler(user);
    res.status(201).send("User was created succesfully");
  });

router.put("", async (req: Request, res: Response) => {
    const userId: number = req.body.userId;
    const username: string = req.body.username;
    const password: string = req.body.password;
    const profilepic: string = req.body.profilepic;
    await changeUserDetails(userId, username, password, profilepic);
    res.status(201).send("User was update succesfully");
});

export default router;