import { Router } from "express";
import { loginAdmin, registerAdmin } from "../controller/admin";

const router = Router();

type HelloResponse = string;

router.get<{}, HelloResponse>("/", (req, res) => {
  res.send("hello");
});

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

export default router;
