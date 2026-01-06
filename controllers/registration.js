import Student from "../models/student.model.js";

export async function registration(req, res) {
    try {
        // 1. Destructure (Fixed: removed parentheses)
        const { name, email, roll, branch } = req.body;

        // 2. Validation
        if (!name || !email || !roll || !branch) {
            return res.status(400).json({
                success: false,
                message: "All fields (name, email, roll, branch) are required"
            });
        }

        // 3. Check for existing student (Email OR Roll)
        // You can check both in one query to save database time
        const existingStudent = await Student.findOne({
            $or: [{ email }, { roll }]
        });

        if (existingStudent) {
            return res.status(409).json({
                success: false,
                message: existingStudent.email === email 
                    ? "Email already registered" 
                    : "Roll number already exists"
            });
        }

        // 4. Create Student
        const user = await Student.create({
            name,
            email,
            roll,
            branch
        });

        return res.status(201).json({
            success: true,
            message: "Student registered successfully",
            user
        });

    } catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}