
import express from "express";

import {
    clientCheckoutSession
} from "../controllers/paymentController.mjs";

const router = express.Router();

router.post(
    "/client-checkout-session",
    clientCheckoutSession
);

export default router;
