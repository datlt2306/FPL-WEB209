import express from "express";
import cors from "cors";
import morgan from "morgan";

import { connectDB } from "./config/db";
import productRouter from "./routers/product";
const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
// connect db
connectDB("mongodb://localhost:27017/wd18332");

// routers
app.use("/api", productRouter);

export const viteNodeApp = app;
