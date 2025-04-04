import express from "express";
import mongoose from "mongoose";
import cors from "cors";
<<<<<<< HEAD
import productRouter from "./routers/product.router";
import categoryRouter from "./routers/category.router";
=======
>>>>>>> 6b1ab22 (chore: remove stale-dolls-smile project files and migrate frontend configuration)
const app = express();
// middleware
app.use(express.json());
app.use(cors());

<<<<<<< HEAD
app.use("/api", productRouter);
app.use("/api", categoryRouter);
=======
app.get("/", () => console.log("thanh cong"));
>>>>>>> 6b1ab22 (chore: remove stale-dolls-smile project files and migrate frontend configuration)
mongoose.connect(`mongodb://localhost:27017/wd19323`);

export const viteNodeApp = app;
