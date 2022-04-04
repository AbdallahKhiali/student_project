const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const userSchema = new Schema({
    firstname:String,
    lastname:String,
    sexe:String,
    email:String,
    password:String,
})

const usermodel = mongoose.model('user',userSchema)

module.exports = usermodel 