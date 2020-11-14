
const express = require("express")
const app = express();

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.get("/api/v1/", (req, res) => {
    res.status(200).json({ msg: "Hello world!" })
})


module.exports = app