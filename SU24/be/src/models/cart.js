import mongoose, { Schema } from "mongoose";

const cartItemSchema = new Schema(
    {
        productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 1, // Đảm bảo số lượng ít nhất là 1
        },
        price: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number,
            default: 0,
        },
        // Tính giá sau khi đã áp dụng khuyến mãi (nếu có)
        finalPrice: {
            type: Number,
            required: true,
        },
    },
    { _id: false } // Không tạo _id cho mỗi item trong mảng products
);

const cartSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true, // Đảm bảo mỗi người dùng chỉ có một giỏ hàng
        },
        products: [cartItemSchema],
        totalQuantity: {
            type: Number,
            required: true,
            default: 0,
        },
        totalPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        totalDiscount: {
            type: Number,
            default: 0,
        },
        finalTotalPrice: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    { timestamps: true, versionKey: false }
);

// Có thể thêm các phương thức hoặc hooks vào schema để tự động cập nhật các trường tổng hợp

export default mongoose.model("Cart", cartSchema);
