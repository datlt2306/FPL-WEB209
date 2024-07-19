import jwt from "jsonwebtoken";
import User from "../models/user";
export const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const user = await jwt.verify(token, "123456", async (error, decoded) => {
            if (error.name === "TokenExpiredError") {
                return res.status(401).json({ error: "Hết hạn token" });
            }
            if (error.name === "JsonWebTokenError") {
                return res.status(401).json({ error: "Token không hợp lệ" });
            }
            return await User.findOne({ _id: decoded.userId });
        });
        if (user.role !== "admin") {
            return res.status(401).json({ error: "Unauthorized" });
        }
        next();
    } catch (error) {
        console.log(error);
    }
};
