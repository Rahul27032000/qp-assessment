import { model } from "../utils/prisma";
import { Request, Response } from "express";
import { createProductSchema } from "../validators/validators";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await model.Product.findMany();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const parsedInput = createProductSchema.safeParse(req.body);

    if (!parsedInput.success) {
      return res.status(400).json({ message: "Bad request - Invalid input" });
    }

    const name = parsedInput.data.name;
    const price = parsedInput.data.price;

    const product = await model.Product.create({ data: { name, price } });
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const parsedInput = createProductSchema.safeParse(req.body);

    if (!parsedInput.success) {
      return res.status(400).json({ message: "Bad request - Invalid input" });
    }

    const name = parsedInput.data.name;
    const price = parsedInput.data.price;

    const updatedProduct = await model.Product.update({
      where: { id: parseInt(id) },
      data: { name, price },
    });
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await model.Product.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
