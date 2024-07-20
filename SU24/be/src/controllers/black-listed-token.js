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

mongoose.model("BlacklistedToken", blacklistedTokenSchema);
