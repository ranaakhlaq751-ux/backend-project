
import express from "express";

import verifyToken from "../middlewares/verify Token.mjs";

import {
    getAllUsers,
    registerUser,
    loginUser,
    logoutUser
} from "../controllers/userController.mjs";

const router = express.Router();

// GET: All users
router.get("/", getAllUsers);

// POST: Register
router.post("/register", registerUser);

// POST: Login
router.post("/login", loginUser);

// PUT: Logout
router.put("/logout", verifyToken, logoutUser);

export default router;
