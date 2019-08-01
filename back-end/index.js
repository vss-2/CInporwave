let express = require("express")
let bodyParser = require("body-parser")

let app = express()
let PORT = 3000

let cartelaRoutes = require("./routes/cartela")

app.use(bodyParser.json())

app.use("/cartelas", cartelaRoutes)

app.listen(PORT, function() {
    console.log("Running app on port " + PORT)
})