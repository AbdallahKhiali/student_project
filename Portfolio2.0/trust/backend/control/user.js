const usermodel = require('../model/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const key ='key'

const getusers = async (req, res) => {
    usermodel.find().then(users => res.json(users)).catch(err => console.log(err))
}
const getuserById = async (req, res) => {
    const { id } = req.params
    usermodel.findById(id).then(user => res.json(user)).catch(err => console.log(err))
}
const deleteuserById = async (req, res) => {
    const { id } = req.params
    usermodel.findByIdAndDelete(id).then(user => res.json(user)).catch(err => console.log(err))
}

const updateuserById = async (req, res) => {
    try {
        const user = await usermodel.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(user);
    } catch (error) {
        res.send(error);
    }
}

const createuser = async (req, res) => {

    const { firstname, lastname, email, password } = req.body
    usermodel.findOne({ email: email }).then(user => {
        if (user) res.json({ message: 'the user already signed' })
        else {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) console.log(err)
                const user = new usermodel({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: hash
                })
                user.save().then(user => res.json({ message: 'user has been saved successfully', user: user }))
            })

        }
    })


}

const login = async (req, res) => {

    const { email, password } = req.body

    usermodel.findOne({ email: email }).then(user => {
        if (!user) res.json({message:'email || password  wrong '})
        else{
            bcrypt.compare(password,user.password,(err,same)=>{
                if(err) console.log(err)
                if(!same){
                    res.json({message:'email || password wrong'})
                }else{
                    jwt.sign({_id:user._id},key,(err,token)=>{
                        if(err) console.log(err)
                        res.json({message:'logged with succes',_id:user._id,token:token})
                    })
                }
            })
        }
    })


}




module.exports = {
    getusers,
    getuserById,
    deleteuserById,
    updateuserById,
    createuser,
    login,
}