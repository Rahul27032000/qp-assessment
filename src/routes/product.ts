import { Router } from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product";

const router = Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.post("/:id", deleteProduct);

export default router;
