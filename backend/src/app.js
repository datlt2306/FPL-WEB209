import express from "express";
import mongoose from "mongoose";
import cors from "cors";
<<<<<<< HEAD
<<<<<<< HEAD
import productRouter from "./routers/product.router";
import categoryRouter from "./routers/category.router";
=======
>>>>>>> 6b1ab22 (chore: remove stale-dolls-smile project files and migrate frontend configuration)
=======
import productRouter from "./routers/product.router";
>>>>>>> 95cb95d (feat: implement product management API and frontend integration with create, read, update, and delete functionality)
const app = express();
// middleware
app.use(express.json());
app.use(cors());

<<<<<<< HEAD
<<<<<<< HEAD
app.use("/api", productRouter);
app.use("/api", categoryRouter);
=======
app.get("/", () => console.log("thanh cong"));
>>>>>>> 6b1ab22 (chore: remove stale-dolls-smile project files and migrate frontend configuration)
=======
app.use("/api", productRouter);
>>>>>>> 95cb95d (feat: implement product management API and frontend integration with create, read, update, and delete functionality)
mongoose.connect(`mongodb://localhost:27017/wd19323`);

export const viteNodeApp = app;
