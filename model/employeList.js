const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeList = new Schema({
    name:String, 
    email:String, 
    mobile:String, 
    designation:String, 
    gender:String, 
    course:[String],
    CreatedDate: {
        type : Date
    }, 
    image:String
})

const employeLIst = mongoose.model("employeList", employeList)
module.exports = employeLIst