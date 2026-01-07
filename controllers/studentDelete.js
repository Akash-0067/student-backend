import Student from "../models/student.model.js"

export async function deleteStudent(req, res){
    try {
        const {id} = req.body;
        if(!id) {
            return res.json({
                message: "id required",
                success: false
            })
        }
        await Student.findByIdAndDelete(id)

        return res.json({
                message: "Successfully deleted",
                success: true
            })

    } catch (error) {
        console.log(error)
        return res.json({
                message: "Internal server error",
                success: false
            })
    }
}