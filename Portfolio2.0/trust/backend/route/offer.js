const express = require('express')
const verifylogin = require('../middleware/verifylogin')
const offerrouter = express.Router()
const {
    getoffers,
    getofferById,
    deleteofferById,
    updateofferById,
    createoffer,
    myoffers,
    postule
} = require('../control/offer')

offerrouter.route('/').get(getoffers)
                    .post(verifylogin,createoffer)

                    
offerrouter.route('/myoffers').get(verifylogin,myoffers)
offerrouter.route('/postule/:id').put(verifylogin,postule)


offerrouter.route('/:id').get(getofferById).delete(verifylogin,deleteofferById)
                                            .put(verifylogin,updateofferById)


module.exports = offerrouter