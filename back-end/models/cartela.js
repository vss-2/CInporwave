let axios = require("axios")
const auxCartela = {
    "tabela":[  [1,2,3,4,5],
                [6,7,8,9,10],
                [11,12,13,14,15],
                [16,17,18,19,20],
                [21,22,23,24,25]  ],
    "usados":[  [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0]  ]
}

let myCartela = {
    "tabela":[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]],
    "usados":[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
}

function getCartela(){
    return myCartela
}


function createCartela(){//gerar randomicamente uma nova
    myCartela = auxCartela//copia a fixa por enquanto
}

function updateCartela(linha, coluna, num){
    let tab = myCartela.tabela
    if(linha < tab.length && linha>=0 && coluna < tab[0].length && coluna>=0){//indice valido
        let usados = myCartela.usados
        if(usados[linha][coluna]==num){
            myCartela.usados[linha][coluna]=1
            console.log("posicao",linha,coluna,"foi atualizada")
            return true
        }

    }
    return false
}

module.exports = {
    createCartela,
    updateCartela,
    getCartela
}