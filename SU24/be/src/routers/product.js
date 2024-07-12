import { Router } from "express";
import { create, getAllProducts } from "../controllers/product";

const router = Router();
router.get("/products", getAllProducts);
router.post("/products", create);
export default router;
