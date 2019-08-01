let express = require("express")
let router = express.Router()
let cartelaModel = require("../models/cartela")

router.get("/", function (req, res) {
    res.send(cartelaModel.getCartela())//criar nova cartela
})

router.get("/novacartela", function (req, res) {
    res.send(cartelaModel.createCartela())//criar nova cartela
})

router.put("/", function (req, res) {//atualizar arary de pintados da cartela pra cada clique
    let body = req.body//recebe um body={"clickedLine":0,"clickedColumn":0, "Numero":1   }
    let i = body.clickedLine
    let j = body.clickedColumn
    let num = body.Numero
    if (i!=null && j!=null && num!=null) {
        let acertou = cartelaModel.updateCartela(i,j,num)//retorna true se acertou o numero
        if(acertou) res.send({message: "Acertou"})
        else{
            res.send({ message: "Errou" })
        }
    } else {
        console.log(i,j,num)
        res.send({ message: "Errou" })
    }
})



module.exports = router;