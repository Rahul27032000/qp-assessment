import express from "express";
const app = express();
import { MessageResponse } from "./interfaces/messageResponse";
import routes from "./routes/index";
import { notFound, errorHandler } from "./middleware/errorHandler";

import compression from "compression";
import cookieParser from "cookie-parser";
import healthCheck from "./routes/healthCheck";
import cors from "cors";
import limiter from "./middleware/rateLimiter";
import { isUserAuthenticated } from "./middleware/middleware";

app.get<{}, MessageResponse>("/", (req, res) =>
  res.json({ message: "Hello world!" })
);

app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(limiter);

app.use("/health", isUserAuthenticated, healthCheck);
app.use("/api/v1", routes);
app.use(notFound);
app.use(errorHandler);

export default app;
