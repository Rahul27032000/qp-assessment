// prisma.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const model = {
  Customer: prisma.customer,
  User: prisma.user,
  Admin: prisma.admin,
  Product: prisma.product,
  Order: prisma.order,
  OrderItem: prisma.orderItem,
};
