import express from "express";
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Create a new product
router.post("/products", createProduct);

// Get all products
router.get("/products", getAllProducts);

// Get product by ID
router.get("/products/:id", getProductById);

// Update product
router.patch("/products/:id", updateProduct);

// Delete product
router.delete("/products/:id", deleteProduct);

export default router;
