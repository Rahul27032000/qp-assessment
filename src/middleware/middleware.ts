import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { model } from "../utils/prisma";
import { JWT_SECRET_KEY } from "../controller/customer";
import { merge, get } from "lodash";

interface DecodedToken {
  userId: number;
}

export const isAdminAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("inAuthentication");
    const token = req.cookies["AUTH"];
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized - Missing token" });
    }

    const decode = jwt.verify(token, JWT_SECRET_KEY) as DecodedToken;
    const admin = await model.Admin.findUnique({
      where: { user_id: decode.userId },
    });

    if (!admin) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    merge(req, { admin: admin });
    return next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
};

export const isUserAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("inAuthentication");
    const token = req.cookies["AUTH"];
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized - Missing token" });
    }

    const decode = jwt.verify(token, JWT_SECRET_KEY) as DecodedToken;
    const user = await model.Customer.findUnique({
      where: { user_id: decode.userId },
    });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    merge(req, { user: user });
    return next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
};
