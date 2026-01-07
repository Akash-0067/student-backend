// controllers/student.controller.js
import  Student  from "../models/student.model.js";

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      success: true,
      totalStudents: students.length,
      students
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch students"
    });
  }
};
