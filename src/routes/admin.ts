import { Router } from "express";
import { loginAdmin, registerAdmin } from "../controller/admin";

const router = Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

export default router;
