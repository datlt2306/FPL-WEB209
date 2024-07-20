import express from "express";
import { logout, refreshToken, signin, signup } from "../controllers/auth";
const router = express.Router();

router.post("/auth/signup", signup);
router.post("/auth/signin", signin);
router.post("/refresh-token", refreshToken);
router.post("/logout", logout);
export default router;
