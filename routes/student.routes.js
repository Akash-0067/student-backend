import express from "express";
import { registration } from "../controllers/registration.js"; // Adjust path as needed

const router = express.Router();

router.post("/register", registration);

export default router;