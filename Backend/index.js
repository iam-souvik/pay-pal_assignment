// EXTERNAL IMPORTS
const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app = express();


const connect = require("./configs/db");
const taskRoute = require("./routes/task.routes");
const sprintRoute = require("./routes/sprints.routes");


app.use(express.json())
app.use(cors());
app.use("/tasks", taskRoute);
app.use("/sprints", sprintRoute);


app.get("/", (req, res) => {
    res.send("hello")
})

const PORT = process.env.PORT || 8080

app.listen(PORT, async () => {
    try {
        await connect()
        console.log("connection success")
        // console.log(connect())
    }
    catch (e) {

        console.log("no connection", e)
    }

})
