const offermodel = require('../model/offer')
const usermodel = require('../model/user')


const getoffers = async (req, res) => {
    offermodel.find().populate('user', "_id firstname lastname ").then(offers => res.json(offers)).catch(err => console.log(err))
}


const createoffer = async (req, res) => {

    const { companyname, titlejob, description, location, categorie } = req.body

    const offer = new offermodel({
        companyname: companyname,
        titlejob: titlejob,
        description: description,
        location: location,
        categorie: categorie,
        user: req.user,
    })
    offer.save().then(offer => res.json({ message: 'offer has been saved successfully', offer: offer }))



}

const getofferById = async (req, res) => {
    const { id } = req.params
    offermodel.findById(id).then(offer => res.json(offer)).catch(err => console.log(err))
}
const deleteofferById = async (req, res) => {
    const { id } = req.params
    offermodel.findByIdAndDelete(id).then(offer => res.json(offer)).catch(err => console.log(err))
}

// const updateofferById = async (req, res) => {
//     const { id } = req.params
//     offermodel.findByIdAndUpdate({ _id: req.params.id },req.body).then(offer =>res.json(offer)).catch(err => console.log(err,'here is the err'))
// }


const updateofferById = async (req, res) => {
    try {
        const offer = await offermodel.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(offer);
    } catch (error) {
        res.send(error);
    }
}

const myoffers = async (req, res) => {
    offermodel.find({ user: req.user._id })
        .populate("user")
        .then(myoffer => {
            res.json(myoffer)
        })
        .catch(err => {
            console.log(err)
        })
}

const postule = async (req,res)=>{
    try {
        const user = await usermodel.findOne({ _id: req.user._id });
        console.log(user)
        const offer = await offermodel.findByIdAndUpdate(
            {_id:req.params.id},
            {$push:{postule:user}},
            {new:true}
            )
        // console.log(user)
        res.send(offer);
    } catch (error) {
        res.send(error);
    }

}


module.exports = {
    getoffers,
    getofferById,
    deleteofferById,
    createoffer,
    updateofferById,
    myoffers,
    postule
}