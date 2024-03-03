import { z } from "zod";

export const addProductToOrderSchema = z.object({
  productId: z.number(),
});

export const createProductSchema = z.object({
  name: z.string().min(3),
  price: z.number().min(0),
});
