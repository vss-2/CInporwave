let express = require("express")
let bodyParser = require("body-parser")

let app = express()
let PORT = 3333

let Routes = require("./routes/rotas")

app.use(bodyParser.json())

app.use("/cartelas", Routes)

app.listen(PORT, function() {
    console.log("Running app on port " + PORT)
})