import express, { Request, Response } from "express";
import cors from "cors";
import messageRoute from "./routers/message.route";

const app = express();

app.use(cors())

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Brave API")
})

app.use("/api/v1", messageRoute)

export default app;