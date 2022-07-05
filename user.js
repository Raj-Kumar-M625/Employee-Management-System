const mongoose = require("mongoose")


const employeeSchema = mongoose.Schema({
    name:{
    	type:String,
    	required:true
    },
    email:{
    	type:String,
    	required:true
    },
    joinDate:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    Salary:{
        type:Number,
        required:true
    }
})



module.exports = mongoose.model('Employee',employeeSchema)