import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { model } from "../utils/prisma";
import { Request, Response } from "express";
require("dotenv").config();

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;

export const registerCustomer = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;

    const existingUser = await model.User.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      // If either email or username is taken, send a response
      return res
        .status(400)
        .json({ message: "Email or username is already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await model.User.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    await model.Customer.create({
      data: {
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    res.status(201).json({ message: "Customer registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginCustomer = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;

    const user = await model.User.findUnique({
      where: { email },
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "User with given email does not exist" });
    }

    const customer = await model.Customer.findUnique({
      where: { user_id: user.id },
    });

    if (!customer) {
      return res.status(401).json({ message: "you are not customer" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET_KEY, {
      expiresIn: "3d",
    });
    res.cookie("AUTH", token);
    return res.status(200).json({ message: "login successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
