import { Router } from "express";
import hello from "./hello";
import { MessageResponse } from "../interfaces/messageResponse";

const router = Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({ message: "Root Api" });
});

router.use("/hello", hello);
// router.use("/users", users);

export default router;
