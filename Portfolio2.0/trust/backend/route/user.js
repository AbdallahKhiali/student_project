const express = require('express')
const verifylogin = require('../middleware/verifylogin')
const userrouter = express.Router()
const {
    getusers,
    deleteuserById,
    createuser,
    getuserById,
    updateuserById,
    login
} = require('../control/user')

userrouter.route('/').get(getusers).post(createuser)
userrouter.route('/login').post(login)
userrouter.route('/:id').get(getuserById).delete(deleteuserById).put(updateuserById)





module.exports = userrouter
