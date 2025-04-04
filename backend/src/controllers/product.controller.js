import Product from "../models/product.model.js";

// Create a new product
export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(201).json({
            message: "Product created successfully",
            data: product,
        });
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
        return res.status(200).json(products);
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
