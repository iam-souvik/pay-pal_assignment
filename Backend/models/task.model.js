// 
const mongoose = require("mongoose")

// Creating mongoose schema for single Task
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false,
    },
    asignee: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: {
            values: ['bug', 'feature', 'story'],
            message: "Please choose between bug, feature or story!"
        }
    }
}, { versionKey: false, timestamps: true })

const TaskModel = mongoose.model("task", taskSchema);

module.exports = TaskModel;