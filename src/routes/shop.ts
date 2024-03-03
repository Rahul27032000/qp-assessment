import { Router } from "express";
import { addProductOrder, placeOrder } from "../controller/order";
import { getAllProducts } from "../controller/product";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Root Api" });
});

router.post("/add-product", addProductOrder);
router.post("/place-order", placeOrder);
router.get("/get-products", getAllProducts);

export default router;
