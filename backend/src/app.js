import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
// middleware
app.use(express.json());
app.use(cors());

app.get("/", () => console.log("thanh cong"));
mongoose.connect(`mongodb://localhost:27017/wd19323`);

export const viteNodeApp = app;
