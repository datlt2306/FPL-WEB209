import express from "express";

import { connectDB } from "./config/db";
import productRouter from "./routers/product";
import cors from "cors";
const app = express();
// middleware
app.use(express.json());
app.use(cors());

// connect db
connectDB("mongodb://localhost:27017/WD18329");

// routers
app.use("/api", productRouter);

export const viteNodeApp = app;
