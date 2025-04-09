import { Category } from "../models";

export const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        return res.status(201).json(category);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const getCategory = async (req, res) => {
    try {
        const category = await Category.find();
        return res.status(200).json(category);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
