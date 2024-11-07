const employeLIst = require("../model/employeList")

const editControler = async (req, res) => {
    const {id, name, email, mobile, designation, gender, course} = req.body
    try {
        const updateData = {
            name, 
            email,
            mobile,
            designation,
            gender,
            course
        }
        const findEmployee = await employeLIst.findOneAndUpdate({_id:id}, updateData)
       
        res.status(200).json({ message: "Employee data updated successfully", data: findEmployee });
    } catch (error) {
        // console.log('EditEmployee fails:', error);
        res.status(400).json({ message: 'EditEmployee fails', error: error.message });
    }
}

module.exports = {editControler}