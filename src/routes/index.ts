import { Router } from "express";
import userRouter from "./user";
import adminRouter from "./admin";
import { MessageResponse } from "../interfaces/messageResponse";

const router = Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({ message: "Root Api" });
});

router.use("/user", userRouter);
router.use("/admin", adminRouter);

export default router;
