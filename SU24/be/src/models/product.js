import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,
        },
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model("Product", productSchema);
