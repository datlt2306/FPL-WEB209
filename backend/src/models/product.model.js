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
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model("Products", productSchema);
