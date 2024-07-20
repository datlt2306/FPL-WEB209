import jwt from "jsonwebtoken";
import User from "../models/user";
import { isTokenBlacklisted } from "../controllers/auth";

export const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        // Kiểm tra token có trong blacklist
        if (await isTokenBlacklisted(token)) {
            return res.status(401).json({ error: "Token không hợp lệ" });
        }
        let decoded;
        try {
            decoded = jwt.verify(token, "123456");
        } catch (error) {
            if (error.name === "TokenExpiredError") {
                return res.status(401).json({ error: "Hết hạn token, cần làm mới" });
            } else {
                return res.status(401).json({ error: "Token không hợp lệ" });
            }
        }

        const user = await User.findOne({ _id: decoded.userId });
        if (!user || user.role !== "admin") {
            return res.status(401).json({ error: "Unauthorized" });
        }

        // Thêm user vào req để sử dụng ở các middleware tiếp theo
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
