const leadModel = require("../model/leadDetailsModel")
require("dotenv").config()
const jwt = require("jsonwebtoken")

const getAllLeads = async (req, res) => {
    try {
        const data = await leadModel.find()
        res.json(data)
    } catch (err) {
        res.status(400).json({ "message": err.name })
    }
}


const createLead = async (req, res) => {

    console.log(
        "req came"
    )

    try {
        const user = new leadModel({
            name: req.body.name,
            email: req.body.email,
            status: req.body.ststus,
            organization: req.body.organization
        })

        const data = await user.save()
        res.status(201).json(data)

    } catch (err) {
        console.log(err);
        res.status(400).json({ "error": err })
    }
}

const updateLead = async (req, res) => {
    const user = leadModel.findOne({ _id: req.body.id })

    try {
        if (user) {
            const updatedUser = {
                ...req.body
            }
            await leadModel.updateOne({ id: user._id }, updatedUser)
            return res.status(201).json({ "message": "updated" })
        } return res.status(404).json({ "message": "user not found" })
    } catch (err) {
        res.status(400).json({ "error": err.message })
    }
}

const deleteLead = async (req, res) => {
    const user = leadModel.findOne({ _id: req.params.id })
    console.log(req.params);
    try {
        if (user) {
            await leadModel.deleteOne(user);
            res.json({ "message": "User removed" })
        } else {
            res.status(404).json({ "message": "user not found" })
        }
    } catch (err) {
        res.status(500).json({ "error": err.message })
    }
}


module.exports = {
    getAllLeads,
    createLead,
    updateLead,
    deleteLead
}