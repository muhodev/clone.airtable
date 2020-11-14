require("dotenv").config()
const mongoose = require("mongoose")

const app = require("./app")

const PORT = process.env.APP_PORT || 3000

const MONGO_DB_URI = process.env.MONGO_DB_URI

mongoose
    .connect(
        MONGO_DB_URI,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }
    )
    .then(() => {
        console.log("DB connection successful")
    })
    .catch((err) => {
        throw new Error(err)
    })

app
    .listen(PORT, () => {
        console.log(`App running on port ${PORT}`)
    })