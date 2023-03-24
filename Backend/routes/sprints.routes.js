const express = require("express")
const { getAllSprints, getSingleSprint, postSprint, updateSprint, deleteSprint } = require("../controllers/sprint.controllers")
const sprintRoute = express.Router();

sprintRoute.get("/", getAllSprints);
sprintRoute.get("/:id", getSingleSprint);
sprintRoute.post("/", postSprint);
sprintRoute.delete("/:id", deleteSprint);
sprintRoute.patch("/:id", updateSprint);

module.exports = sprintRoute;