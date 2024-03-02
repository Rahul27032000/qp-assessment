// healthCheckRoutes.ts

import { Router, Request, Response } from "express";
import { HealthMessageResponse } from "../interfaces/healthCheck";

const healthCheck = Router();

healthCheck.get<{}, HealthMessageResponse>(
  "/",
  (req: Request, res: Response) => {
    res.json({ status: "ok" });
  }
);

export default healthCheck;
