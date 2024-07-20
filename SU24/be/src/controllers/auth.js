import bcryptjs from "bcryptjs";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";
import jwt from "jsonwebtoken";
import User from "../models/user";
import BlacklistedToken from "../models/black-listed-token";

const signupSchema = Joi.object({
    name: Joi.string().min(3).max(30).messages({
        "string.min": "Trường Name phải có ít nhất {#limit} ký tự",
        "string.max": "Trường Name không được vượt quá {#limit} ký tự",
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Trường Email là bắt buộc",
        "string.empty": "Trường Email không được để trống",
        "string.email": "Trường Email phải là email hợp lệ",
    }),
    password: Joi.string().min(6).max(30).required().messages({
        "any.required": "Trường Password là bắt buộc",
        "string.empty": "Trường Password không được để trống",
        "string.min": "Trường Password phải có ít nhất {#limit} ký tự",
        "string.max": "Trường Password không được vượt quá {#limit} ký tự",
    }),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
        "any.required": "Trường Confirm Password là bắt buộc",
        "any.only": "Mật khẩu không trùng khớp",
    }),
    avatar: Joi.string().uri().messages({
        "string.uri": "Trường Avatar phải là đường dẫn hợp lệ",
    }),
});
const generateRefreshToken = (userId) => {
    return jwt.sign({ userId }, "123456", { expiresIn: "7d" });
};
const generateAccessToken = (userId) => {
    return jwt.sign({ userId }, "123456", { expiresIn: "15m" });
};
export const signup = async (req, res) => {
    const { email, password } = req.body;
    const { error } = signupSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const messages = error.details.map((item) => item.message);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            messages,
        });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            messages: ["Email đã tồn tại"],
        });
    }
    // Mã hóa mật khẩu
    const hashedPassword = await bcryptjs.hash(password, 10);
    // Nếu không có user nào trong hệ thống thì tạo user đầu tiên là admin
    const role = (await User.countDocuments({})) === 0 ? "admin" : "user";

    const user = await User.create({
        ...req.body,
        password: hashedPassword,
        role,
    });
    return res.status(StatusCodes.CREATED).json({
        user,
    });
};
export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        // user = { _id: , name: , xxx}
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({
                messages: ["Email không tồn tại"],
            });
        } else {
            const isMatch = await bcryptjs.compare(password, user.password);
            if (!isMatch) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    messages: ["Mật khẩu không chính xác"],
                });
            }
            const accessToken = generateAccessToken(user._id);
            const refreshToken = generateRefreshToken(user._id); // Generate refresh token

            return res.status(StatusCodes.OK).json({
                accessToken,
                refreshToken,
            });
        }
    } catch (error) {
        console.error(`Error finding user with email ${email}:`, error);
    }
};
export const logout = async (req, res) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: "No token provided" });
        }
        // Lưu token vào danh sách đen (blacklist) để ngăn không cho token đó được sử dụng nữa
        const blacklistedToken = new BlacklistedToken({ token });
        await blacklistedToken.save();

        // Gửi phản hồi thành công
        res.status(StatusCodes.OK).json({ message: "Successfully logged out" });
    } catch (error) {
        console.error(`Error during logout:`, error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" });
    }
};

// be/src/controllers/auth.js
export const refreshToken = async (req, res) => {
    try {
        const oldToken = req.headers.authorization;
        if (!oldToken) {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: "No token provided" });
        }

        // Kiểm tra token có trong blacklist
        const isBlacklisted = await isTokenBlacklisted(oldToken);
        if (isBlacklisted) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ error: "Token is blacklisted" });
        }

        // Giải mã oldToken để lấy userId
        let decoded;
        try {
            decoded = jwt.verify(oldToken, "123456"); // Sử dụng cùng secret key như khi tạo token
        } catch (error) {
            if (error.name === "TokenExpiredError") {
                return res.status(StatusCodes.UNAUTHORIZED).json({ error: "Token expired" });
            } else {
                return res.status(StatusCodes.UNAUTHORIZED).json({ error: "Invalid token" });
            }
        }

        const userId = decoded.userId;
        if (!userId) {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid token payload" });
        }

        // Tạo refreshToken mới
        const newToken = generateRefreshToken(userId);

        // Trả về refreshToken mới cho client
        res.status(StatusCodes.OK).json({ newToken });
    } catch (error) {
        console.error(`Error during token refresh:`, error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" });
    }
};
export const isTokenBlacklisted = async (token) => {
    const tokenInBlacklist = await BlacklistedToken.findOne({ token });
    return !!tokenInBlacklist;
};
