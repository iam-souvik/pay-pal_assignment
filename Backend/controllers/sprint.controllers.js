
const sprintModel = require("../models/sptint.model");

const getAllSprints = async (req, res) => {
    try {
        const tasks = await taskModel.find();
        res.status(200).send({ message: "Success", data: tasks })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!", error: error.message })
    }
};


const getSingleSprint = async (req, res) => {
    const id = req.params.id;
    try {
        const tasks = await taskModel.find({ _id: id });
        res.status(200).send({ message: "Success", data: tasks })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!", error: error.message })
    }
};

const postSprint = async (req, res) => {
    const task = req.body.task;
    const sprint = req.body.sprint;
    try {
        const newTask = new taskModel(task);
        const matchedSprint = sprintModel.find({ name: sprint });
        matchedSprint.tasks = [...matchedSprint.tasks, newTask._id];
        await newTask.save();
        await matchedSprint.save();
        res.status(201).send({ message: "Task added succesfully" })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!", error: error.message })
    }
    ;
}

const updateSprint = async (req, res) => {
    const id = req.params.id;
    try {
        await taskModel.findByIdAndUpdate(id, req.body);
        res.status(200).send({ message: "Update Success" })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!", error: error.message })
    }
};

const deleteSprint = async (req, res) => {
    const id = req.params.id;
    try {
        await taskModel.findByIdAndDelete(id);
        res.status(200).send({ message: "Deleted successfully" })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!", error: error.message })
    }
};

module.exports = { getAllSprints, getSingleSprint, postSprint, updateSprint, deleteSprint }