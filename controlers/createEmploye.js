const employeLIst = require("../model/employeList");
const { validateData } = require("../utils/validateData");
const path = require('path')


// console.log(path.resolve( __dirname, '..'))

const createEmploye = async (req, res) => {

    const { name, email, mobile, designation, gender, course } = req.body;

    console.log(name, email, mobile, designation, gender, course)

    try {
        await validateData({ name, email, mobile, designation, gender, course })

        const employeData = new employeLIst({
            name,
            email,
            mobile,
            designation,
            gender,
            course,
            image:"https://cdn-icons-png.flaticon.com/512/21/21104.png",
            CreatedDate: Date.now()
        })

        employeData.save()

        res.status(200).json({message:'employee detail feed'})
    } catch (error) {
        console.log('Validation error:', error);
        res.status(400).json({ message: 'Validation failed', error: error.message });
    }




}

const getEmploye = async (req, res) => {


try {
    const employeDetail = await employeLIst.find()
    if(!employeDetail){
        return res.status(401).json({message:"no employee detail found"})
    }

    res.status(200).json({message:"employeData successfully get", data:employeDetail})

} catch (error) {
    console.log('employee detail error:', error);
    res.status(400).json({ message: 'employee detail failed', error: error.message });
}
}


module.exports = { createEmploye, getEmploye }