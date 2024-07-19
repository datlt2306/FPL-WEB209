import { Router } from "express";
import {
    createAttribute,
    createValueAttribute,
    deleteAttribute,
    getAllAttributes,
    getAttributeById,
    updateAttribute,
} from "../controllers/attribute";

const router = Router();
// Route để tạo mới một thuộc tính
router.post("/attributes", createAttribute);

// Route để thêm giá trị cho thuộc tính đã tồn tại
router.post("/attributes/:id/values", createValueAttribute);

// Route để lấy tất cả các thuộc tính
router.get("/attributes", getAllAttributes);

// Route để lấy một thuộc tính theo ID
router.get("/attributes/:id", getAttributeById);

// Route để cập nhật một thuộc tính theo ID
router.put("/attributes/:id", updateAttribute);

// Route để xóa một thuộc tính theo ID
router.delete("/attributes/:id", deleteAttribute);

export default router;
