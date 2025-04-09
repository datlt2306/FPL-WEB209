import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
        },
        stock: {
            type: Number,
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);
// { _id: "12321321"}
// { name, price, desription, stock, category: "12321321" }
export const Product = mongoose.model("Product", productSchema);
