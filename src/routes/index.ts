import { Router } from "express";
import userRouter from "./user";
import adminRouter from "./admin";
import productRouter from "./product";
import shopRouter from "./shop";
import { MessageResponse } from "../interfaces/messageResponse";
import {
  isAdminAuthenticated,
  isUserAuthenticated,
} from "../middleware/middleware";

const router = Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({ message: "Root Api" });
});

router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/products", isAdminAuthenticated, productRouter);
router.use("/shop", isUserAuthenticated, shopRouter);

export default router;
