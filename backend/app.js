const express = require("express")
const app = express()

const { errorHandler, errorUrlHandler } = require("./controllers/error")
const userRoutes = require("./routes/users")

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.use("/api/v1/users", userRoutes)

app.get("/api/v1/", (req, res) => {
    res.status(200).json({ msg: "Hello world!" })
})

// missing url middleware
app.all("*", errorUrlHandler)

// global error middleware
app.use(errorHandler)

module.exports = app