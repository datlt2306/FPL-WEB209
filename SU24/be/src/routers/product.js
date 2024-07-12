import { Router } from "express";
import { removeProduct, create, getAllProducts } from "../controllers/product";

const router = Router();

router.get(`/products`, getAllProducts);
router.post(`/products`, create);
router.delete(`/products/:id`, removeProduct);
export default router;
