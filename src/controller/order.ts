import { OrderItem } from "@prisma/client";
import { model } from "../utils/prisma";
import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import { addProductToOrderSchema } from "../validators/validators";

interface OrderItemWithProduct extends OrderItem {
  product: {
    price: number;
  };
}

export const addProductOrder = async (req: Request, res: Response) => {
  try {
    const parsedInput = addProductToOrderSchema.safeParse(req.body);

    if (!parsedInput.success) {
      const errorMessage =
        parsedInput.error.errors[0]?.message || "Invalid input";
      return res.status(400).json({ message: `Bad request - ${errorMessage}` });
    }

    console.log(parsedInput);
    const productId = parsedInput.data.productId;

    const userId = get(req, "user.id") as string | undefined;
    let order = await model.Order.findFirst({
      where: { customer_id: parseInt(userId!), complete: false },
    });

    if (!order) {
      order = await model.Order.create({
        data: { customer_id: parseInt(userId!) },
      });
    }

    let orderItem = await model.OrderItem.findFirst({
      where: { order_id: order.id, product_id: productId },
    });

    if (orderItem) {
      orderItem = await model.OrderItem.update({
        where: { id: orderItem.id },
        data: { quantity: orderItem.quantity + 1 },
      });
    } else {
      orderItem = await model.OrderItem.create({
        data: {
          order_id: order.id,
          product_id: productId,
        },
      });
    }
    return res.status(200).json(orderItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const userId = get(req, "user.id") as string | undefined;

    const order = await model.Order.findFirst({
      where: { customer_id: parseInt(userId!), complete: false },
      include: { orderItems: { include: { product: true } } },
    });

    const totalPrice = order?.orderItems.reduce(
      (total, orderItem: OrderItemWithProduct) => {
        return total + orderItem.quantity * orderItem.product.price;
      },
      0
    );

    if (!order) {
      return res
        .status(400)
        .json({ message: "No open order found for the customer" });
    }

    const updatedOrder = await model.Order.update({
      where: { id: order.id },
      data: { complete: true },
    });

    res.json({ order: updatedOrder, price: totalPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
