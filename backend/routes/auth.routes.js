import express from "express";
import { login, logout, singup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", singup);

router.get("/login", login);

router.get("/logout", logout);

export default router;
