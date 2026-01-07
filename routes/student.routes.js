import express from "express";
import { registration } from "../controllers/registration.js"; // Adjust path as needed
import { getAllStudents } from "../controllers/getAllStudents.js";
import { deleteStudent } from "../controllers/studentDelete.js";
import { updateStudent } from "../controllers/updateStudent.js";
const router = express.Router();
 

router.post("/register", registration);
router.get("/fetch", getAllStudents);
router.delete("/delete", deleteStudent)
router.put("/update", updateStudent);

export default router;