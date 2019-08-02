let express = require("express")
let bodyParser = require("body-parser")

let app = express()
let PORT = 3333

let Routes = require("./routes/rotas")

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    next();
  });

app.use(bodyParser.json())

app.use("/cartelas", Routes)

app.listen(PORT, function() {
    console.log("Running app on port " + PORT)
})