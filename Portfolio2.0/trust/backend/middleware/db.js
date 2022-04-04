const mongoose = require('mongoose')


const Connection = async () =>{
    mongoose.connect('mongodb://localhost:27017/trust'
        ,{useNewUrlParser: true,
        useUnifiedTopology: true,
    })    
    .then(console.log('the connection with the DB had been established with success'))
    .catch((err)=>{
        console.log('the connection with the DB had not established')
        console.log(err)
    })
}

module.exports = Connection