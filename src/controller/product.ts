import { model } from "../utils/prisma";
import { Request, Response } from "express";

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
    const { name, price } = req.body;
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
    const { name, price } = req.body;
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
