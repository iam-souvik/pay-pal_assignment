const mongoose = require("mongoose")

const sprintSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tasks: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tasks",
        immutable: true
      }
    ],
    default: []
  }
}, { versionKey: false });

const SprintModel = mongoose.model("sprint", sprintSchema);

module.exports = SprintModel;