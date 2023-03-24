const mongoose = require("mongoose")

const sprintSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tasks: {
    typeof: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tasks"
      }
    ],
    default: []
  }
}, { versionKey: false });

const Sprint = mongoose.model("sprint", sprintSchema);

module.exports = Sprint;