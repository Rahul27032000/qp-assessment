import { Router } from "express";
import { addProductOrder, placeOrder } from "../controller/order";

const router = Router();

router.post("/add-product", addProductOrder);
router.post("/place-order", placeOrder);

export default router;
