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
<<<<<<< HEAD
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
=======
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model("Product", productSchema);
>>>>>>> 95cb95d (feat: implement product management API and frontend integration with create, read, update, and delete functionality)
