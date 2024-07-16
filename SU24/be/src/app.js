import express from "express";
import productRouter from "./routers/product";
import categoryRouter from "./routers/category";
import { connectDB } from "./config/db";
import cors from "cors";
import morgan from "morgan";
const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// connect database
connectDB("mongodb://localhost:27017/wd18333");

app.use("/api", productRouter);
app.use("/api", categoryRouter);
export const viteNodeApp = app;
