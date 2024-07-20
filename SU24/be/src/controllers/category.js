import { StatusCodes } from "http-status-codes";
import Category from "../models/category";
import Product from "../models/product";
import slugify from "slugify";
export const create = async (req, res) => {
    try {
        const categoy = await Category.create({
            name: req.body.name,
            slug: slugify(req.body.name, "-"),
        });

        return res.status(StatusCodes.CREATED).json(categoy);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const getAll = async (req, res) => {
    try {
        const categories = await Category.find({});
        if (categories.length === 0) {
            return res.status(StatusCodes.OK).json({ message: "Không có danh mục nào!" });
        }
        return res.status(StatusCodes.OK).json(categories);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params; // Sử dụng destructuring để lấy id
        const products = await Product.find({ category: id });
        const category = await Category.findById(id);

        if (!category) {
            // Sửa điều kiện kiểm tra
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Không tìm thấy danh mục!" }); // Cập nhật thông điệp cho rõ ràng
        }
        return res.status(StatusCodes.OK).json({
            category,
            products,
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};
export const deleteCategoryById = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        return res.status(StatusCodes.OK).json(category);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};
export const updateCategoryById = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(StatusCodes.OK).json(category);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

// iphone 13 product max => /product/iphone-13-product-max
// GET /product/:slug
