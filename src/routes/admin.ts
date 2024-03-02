import { Router } from "express";

const router = Router();

type HelloResponse = string;

router.get<{}, HelloResponse>("/", (req, res) => {
  res.send("hello");
});

export default router;
