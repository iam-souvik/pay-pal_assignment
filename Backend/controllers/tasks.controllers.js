const taskModel = require("../models/task.model")
const sprintModel = require("../models/sptint.model");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find();
        res.status(200).send({ message: "Success", data: tasks })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!", error: error.message })
    }
};


const getSingleTask = async (req, res) => {
    const id = req.params.id;
    try {
        const tasks = await taskModel.find({ _id: id });
        res.status(200).send({ message: "Success", data: tasks })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!", error: error.message })
    }
};

const postTask = async (req, res) => {
    // console.log(req.body)
    const task = req.body.task;
    const name = req.body.sprint;
    if (!task || !name || typeof name !== 'string') {
        res.status(400).send({ message: "task or sprint is not provided properly!" })
        return;
    }
    try {
        const matchedSprint = await sprintModel.findOne({ name });
        // console.log(matchedSprint);
        const sprintId = matchedSprint._id;
        const newTask = new taskModel({ ...task, sprint: sprintId });
        const newTaskId = newTask._id;
        // matchedSprint.tasks = [...matchedSprint.tasks, newTaskId];
        // matchedSprint.tasks .push( [ newTaskId]);
        console.log(newTaskId);
        
         console.log(matchedSprint.tasks);
        // await newTask.save();
        // await matchedSprint.save();
        res.status(201).send({ message: "Task added succesfully" })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!", error: error.message })
    }
    ;
}

const updateTask = async (req, res) => {
    const id = req.params.id;
    try {
        await taskModel.findByIdAndUpdate(id, req.body);
        res.status(200).send({ message: "Update Success" })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!", error: error.message })
    }
};

const deleteTask = async (req, res) => {
    const id = req.params.id;
    try {
        await taskModel.findByIdAndDelete(id);
        res.status(200).send({ message: "Deleted successfully" })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!", error: error.message })
    }
};

module.exports = { getAllTasks, getSingleTask, postTask, updateTask, deleteTask }