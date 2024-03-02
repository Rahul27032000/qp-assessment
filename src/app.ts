import express from "express";
const app = express();
import { MessageResponse } from "./interfaces/messageResponse";
import routes from "./routes/index";
import * as middleware from "./middleware/middleware";
import compression from "compression";
import cookieParser from "cookie-parser";
import healthCheck from "./routes/healthCheck";
import cors from "cors";

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

app.use("/health", healthCheck);
app.use("/api/v1", routes);
app.use(middleware.notFound);
app.use(middleware.errorHandler);

export default app;
