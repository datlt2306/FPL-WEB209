import { Router } from "express";
import { addOrUpdateToCart, getCartByUserId, removeFromCart } from "../controllers/cart";

const router = Router();

// lấy danh sách sản phẩm trong giỏ hàng dựa vào ID
router.get("/carts/:userId", getCartByUserId);
// Thêm sản phẩm vào giỏ hàng
// Cập nhật số lượng của sản phẩm trong giỏ hàng từ input
router.put("/carts/update", addOrUpdateToCart);
// Xóa item trong giỏ hàng
router.post("/carts/remove", removeFromCart);

export default router;
