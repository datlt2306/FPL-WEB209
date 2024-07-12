import { Router } from "express";
import { addProduct, getAllProducts, removeProduct } from "../controllers/product";

const router = Router();

router.get(`/products`, getAllProducts);
router.post(`/products`, addProduct);
router.delete(`/products/:id`, removeProduct);
export default router;
