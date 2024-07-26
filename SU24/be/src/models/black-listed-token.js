import mongoose from "mongoose";
const blacklistedTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    expiryDate: {
        type: Date,
        required: true,
    },
});

export default mongoose.model.BlacklistedToken ||
    mongoose.model("BlacklistedToken", blacklistedTokenSchema);
