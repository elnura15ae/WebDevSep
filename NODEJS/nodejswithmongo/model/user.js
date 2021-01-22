const mongoose = require ('mongoose')

let Schema = mongoose.Schema
const UserSchema = new Schema({
    username:{
        type: String,
        unique: true
    },
    password:{
        type: String
    }
})

module.exports =mongoose.model('User',UserSchema)