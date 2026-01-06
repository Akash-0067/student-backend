import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    roll: {
        type: String,
        required: true,
        unique: true
    },
    branch: {
        type: String,
        required: true,
        enum: ["civil", "electrical", "mnc", "cse", "mechnical", "chemical"]
    }
}, { 
    timestamps: true
});

const Student = mongoose.model("Student", studentSchema);

export default Student;