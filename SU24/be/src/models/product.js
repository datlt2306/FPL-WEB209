import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true,
            index: true,
        },
        slug: {
            type: String,
            unique: true,
            index: true,
        },
        category: [
            {
                type: String,
                required: true,
            },
        ],
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        image: String,
        gallery: [String],
        description: String,
        discount: {
            type: Number,
            default: 0,
        },
        countInStock: {
            type: Number,
            default: 0,
        },
        featured: Boolean,
        tags: [String],
        attributes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Attribute",
            },
        ],
    },
    { timestamps: true, versionKey: false }
);

productSchema.plugin(mongoosePaginate);
export default mongoose.models.Product || mongoose.model("Product", productSchema);
