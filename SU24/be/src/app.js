import cors from "cors";
import express from "express";
import morgan from "morgan";

import productRouter from "./routers/product";
import { connectDB } from "./config/db";
const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// connect db
connectDB("mongodb://localhost:27017/WD18328");

// routers

app.use("/api", productRouter);

export const viteNodeApp = app;
