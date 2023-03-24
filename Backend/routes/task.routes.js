const express = require("express");
const { getAllTasks, getSingleTask, deleteTask, updateTask, postTask } = require("../controllers/tasks.controllers");
const taskRoute = express.Router();

taskRoute.get("/", getAllTasks);
taskRoute.get("/:id", getSingleTask);
taskRoute.post("/", postTask)
taskRoute.delete("/:id", deleteTask)
taskRoute.patch("/:id", updateTask)

module.exports = taskRoute;