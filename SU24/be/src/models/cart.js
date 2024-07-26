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
            // required: true,
            default: 0,
        },
        totalPrice: {
            type: Number,
            // required: true,
            default: 0,
        },
        totalDiscount: {
            type: Number,
            default: 0,
        },
        finalTotalPrice: {
            type: Number,
            // required: true,
            default: 0,
        },
    },
    { timestamps: true, versionKey: false }
);

// Thêm phương thức cập nhật các trường tổng hợp
cartSchema.methods.updateTotals = function () {
    this.totalQuantity = this.products.reduce((acc, item) => acc + item.quantity, 0);
    this.totalPrice = this.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
    this.totalDiscount = this.products.reduce(
        (acc, item) => acc + item.discount * item.quantity,
        0
    );
    this.finalTotalPrice = this.totalPrice - this.totalDiscount;
};

// Thêm middleware để tự động cập nhật các trường tổng hợp trước khi lưu
cartSchema.pre("save", function (next) {
    this.updateTotals();
    next();
});

// Thêm middleware để tự động cập nhật các trường tổng hợp trước khi cập nhật
cartSchema.pre("findOneAndUpdate", async function (next) {
    const update = this.getUpdate();

    if (update.products) {
        const totalQuantity = update.products.reduce((acc, item) => acc + item.quantity, 0);
        const totalPrice = update.products.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        const totalDiscount = update.products.reduce(
            (acc, item) => acc + item.discount * item.quantity,
            0
        );
        const finalTotalPrice = totalPrice - totalDiscount;

        this.set({
            totalQuantity,
            totalPrice,
            totalDiscount,
            finalTotalPrice,
        });
    }

    next();
});

export default mongoose.model.Cart || mongoose.model("Cart", cartSchema);
