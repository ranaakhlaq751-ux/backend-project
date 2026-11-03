
import express from "express";

import {
    getAllproduts,
    getproductby,
    createproduct,
    updateproduct,
    deleteproduct
} from "../controllers/productController.mjs";

const router = express.Router();

router.get("/", getAllproduts);

router.get("/:id", getproductby);

router.post("/", createproduct);

router.put("/:id", updateproduct);

router.delete("/:id", deleteproduct);

export default router;
