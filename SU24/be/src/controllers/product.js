import { StatusCodes } from "http-status-codes";
import Product from "../models/product";

export const create = async (req, res) => {
    try {
        const product = await Product.create(req.body);

        return res.status(StatusCodes.CREATED).json(product);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    try {
        return res.status(200).json(products);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const removeProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    try {
        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
// iphone 13 product max => /product/iphone-13-product-max
// GET /product/:slug
