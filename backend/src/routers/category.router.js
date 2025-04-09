import express from "express";
import { createCategory, getCategory } from "../controllers/category.controller";

const router = express.Router();

// Create a new product
router.post("/categories", createCategory);
// Get all products
router.get("/categories", getCategory);

export default router;
