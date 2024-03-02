import { Router } from "express";
import { loginCustomer, registerCustomer } from "../controller/customer";

const router = Router();

router.post("/register", registerCustomer);
router.post("/login", loginCustomer);

export default router;
