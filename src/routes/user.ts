import { Router } from "express";
import { loginCustomer, registerCustomer } from "../controller/customer";

const router = Router();

type HelloResponse = string;

router.get<{}, HelloResponse>("/", (req, res) => {
  res.send("hello");
});

router.post("/register", registerCustomer);
router.post("/login", loginCustomer);

export default router;
