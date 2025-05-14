import express from "express";
import "dotenv/config";

import authRouter from "./routes/auth.routes.js";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
  connectDB();
});
