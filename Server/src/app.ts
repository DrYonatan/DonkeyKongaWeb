import express from "express";
import userRouter from "./router/userRouter";
import 'reflect-metadata';
import dataSource  from "./connection/datasource";
import postRouter from "./router/postRouter";
import cors from "cors";

const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
  }));
app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postRouter);

const port = 3000;

dataSource.initialize().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
}).catch((err) => console.log(err));

