let express = require("express")
let router = express.Router()
//let cartelaModel = require("../models/cartela")
let numeroModel = require("../models/numero")
let cartelaUniModel = require("../models/cartelaUni")

router.get("/", function (req, res) {
    res.send(cartelaUniModel.getCartela())//pega cartela atual
})

router.get("/novacartela", function (req, res) {
    //res.send(cartelaModel.createCartela())//criar nova cartela aleatoria
    // res.send(cartelaModel.createCartela5por5())//cria uma fixa de 5x5
    //res.send(cartelaUniModel.createCartelaRnd())//cria uma unidimensional tamanho aleatorio
    res.send(cartelaUniModel.createCartela25())//cria uma fixa de 25
})

//======================usar esse se usar array unidimensional cartelaUniModel
router.put("/", function (req, res) {//atualizar arary de pintados da cartela pra cada clique
    let body = req.body//recebe um body={"pos":0,"Numero":1   }
    let pos = body.pos
    if (pos!=null) {
        let acertou = cartelaUniModel.updateCartela(pos)//retorna true se acertou o numero
        if(acertou) res.send({message: "Acertou"})
        else{
            res.send({ message: "Errou" })
        }
    } else {
        res.send({ message: "Objeto invalido" })
    }
})

router.get("/numero", function(req,res){
    res.send(numeroModel.main())//pegar um numero na base64
})





module.exports = router;