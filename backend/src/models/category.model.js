import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
    },
    { timestamps: true, versionKey: false }
);

export const Category = mongoose.model("Category", categorySchema);
