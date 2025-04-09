<<<<<<< HEAD
<<<<<<< HEAD
import { Product } from "../models";
=======
import Product from "../models/product.model.js";
>>>>>>> 95cb95d (feat: implement product management API and frontend integration with create, read, update, and delete functionality)
=======
import { Product } from "../models";
>>>>>>> f226b31 (feat: add category management with CRUD operations and integrate into product model)

// Create a new product
export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
<<<<<<< HEAD
<<<<<<< HEAD
        return res.status(201).json(product);
=======
        return res.status(201).json({
            message: "Product created successfully",
            data: product,
        });
>>>>>>> 95cb95d (feat: implement product management API and frontend integration with create, read, update, and delete functionality)
=======
        return res.status(201).json(product);
>>>>>>> f226b31 (feat: add category management with CRUD operations and integrate into product model)
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

// Get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f226b31 (feat: add category management with CRUD operations and integrate into product model)
        const newProducts = products.map((product) => {
            return {
                ...product.toObject(),
                category: { id: product.category },
            };
        });
        return res.status(200).json(newProducts);
<<<<<<< HEAD
=======
        return res.status(200).json(products);
>>>>>>> 95cb95d (feat: implement product management API and frontend integration with create, read, update, and delete functionality)
=======
>>>>>>> f226b31 (feat: add category management with CRUD operations and integrate into product model)
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

// Get product by ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

// Update product
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }
        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

// Delete product
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }
        return res.status(200).json({
            message: "Product deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
