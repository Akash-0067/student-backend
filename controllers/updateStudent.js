// IMPORT STUDENT MODEL

import Student from "../models/student.model.js";

// ==========================
// UPDATE STUDENT CONTROLLER
// ==========================
export const updateStudent = async (req, res) => {
  try {
    // 1️⃣ GET DATA FROM FRONTEND
    const { id, name, rollNo, branch } = req.body;

    // 2️⃣ FIND AND UPDATE STUDENT
    const updatedStudent = await Student.findByIdAndUpdate(
      id,                     // find student by id
      { name, rollNo, branch }, // update fields
      { new: true }           // return updated student
    );

    // 3️⃣ SEND RESPONSE BACK
    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ updatedStudent });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
