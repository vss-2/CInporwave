let axios = require("axios")

const auxCartela = {
    "qlinhas":5,
    "qcolunas":5,
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

let myCartela = auxCartela

function getCartela(){
    return myCartela
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function createCartela(){//gerar randomicamente uma nova
   let qlinhas = 0
   let qcolunas = 0
    while(qlinhas<2) qlinhas=Math.floor((Math.random() * 10) + 1);
    while(qcolunas<2)  qcolunas=Math.floor((Math.random() * 10) + 1);
   //console.log(qlinhas,qcolunas) ok
   let numbers=[]
   for(let i=0;i<100;i++)numbers.push(i)
   let newCartela=[]
   for(let i=0;i<qlinhas;i++){
       let linha=[]
       for(let j=0;j<qcolunas;j++){
           shuffleArray(numbers)
           linha.push(numbers.pop())
        }
        newCartela.push(linha)
    }
    
    let newUsados=[]
    let aux = []
    for(let i=0;i<qcolunas;i++) aux.push(0)
    for(let i=0;i<qlinhas;i++) newUsados.push(aux)
   
    myCartela.qlinhas = qlinhas
    myCartela.qcolunas = qcolunas
    myCartela.tabela = newCartela
    myCartela.usados = newUsados
    return myCartela
}

function updateCartela(linha, coluna, num){
    //console.log(linha,coluna,num)
    let tab = myCartela.tabela
    let qlinhas = myCartela.qlinhas
    let qcolunas = myCartela.qcolunas
    //console.log(tab[0].length)
    if(linha < qlinhas && linha>=0 && coluna < qcolunas && coluna>=0){//indice valido
        let usados = myCartela.usados
        if(usados[linha][coluna]==0 && tab[linha][coluna]==num){
            console.log("acertou")
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