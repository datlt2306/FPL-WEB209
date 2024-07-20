import mongoose, { Schema } from "mongoose";
const ValueAttributeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    },
    { timestamps: false, versionKey: false }
);
export const ValueAttributeModel = mongoose.model("ValueAttribute", ValueAttributeSchema);

const AttributeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        values: [
            {
                type: Schema.Types.ObjectId,
                ref: "ValueAttribute",
            },
        ],
    },
    { timestamps: false, versionKey: false }
);
export default mongoose.model("Attribute", AttributeSchema);
