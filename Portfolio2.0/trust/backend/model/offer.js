const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const offerSchema = new Schema({
    titlejob:String,
    description:String,
    companyname:String,
    categorie:String,
    location:String,
    user:{type:Schema.Types.ObjectId,ref:'user'},
    postule:[{type:Schema.Types.ObjectId,ref:'user'}]
})

const offermodel = mongoose.model('offer',offerSchema)

module.exports = offermodel 