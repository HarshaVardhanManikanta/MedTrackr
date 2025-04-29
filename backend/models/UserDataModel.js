const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    mobile:{
        type:String,
        require:true,
        unique:true
    },
    age:{
        type:String,
        require:true, 
        min:18
    },
    password:{
        type:String,
        require:true,
        unique:true
    }

})

const UserDataModel = mongoose.model('UserDataModel',UserSchema)

module.exports = UserDataModel