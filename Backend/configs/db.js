const mongoose = require("mongoose");

const connect = async () => {
    return mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connect;