
const sprintModel = require("../models/sptint.model");

const getAllSprints = async (req, res) => {
    try {
        const tasks = await sprintModel.find();
        res.status(200).send({ message: "Success", data: tasks })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!", error: error.message })
    }
};


const getSingleSprint = async (req, res) => {
    const id = req.params.id;
    try {
        const sprints = await sprintModel.find({ _id: id });
        res.status(200).send({ message: "Success", data: sprints })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!", error: error.message })
    }
};

const postSprint = async (req, res) => {
    try {
        const newSprint = new sprintModel(req.body);
        await newSprint.save();
        res.status(201).send({ message: "Sprint created succesfully" })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!", error: error.message })
    }
    ;
}

const updateSprint = async (req, res) => {
    const id = req.params.id;
    try {
        await sprintModel.findByIdAndUpdate(id, req.body);
        res.status(200).send({ message: "Update Success" })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!", error: error.message })
    }
};

const deleteSprint = async (req, res) => {
    const id = req.params.id;
    try {
        await sprintModel.findByIdAndDelete(id);
        res.status(200).send({ message: "Deleted successfully" })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!", error: error.message })
    }
};

module.exports = { getAllSprints, getSingleSprint, postSprint, updateSprint, deleteSprint }