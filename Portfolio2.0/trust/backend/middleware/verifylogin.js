const jwt = require('jsonwebtoken')
const usermodel = require('../model/user')
const key = 'key'
const mongoose = require('mongoose')

module.exports = verifylogin = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) return res.status(401).json({ error: "you must be logged in" })
    const token = authorization.replace("Bearer ","" )
    const payload = await jwt.verify(token,key)
    // console.log(token)
    const { _id } = payload
    usermodel.findById(_id).then(user => {
        req.user = user
        next()
    })

}

