let axios = require("axios")
let numeroModel = require("./numero")

const cartelaUnidimendional = {
    "tamanho":25,
    "tabela":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25  ],
    "usados":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
}


let myCartela ={

}
myCartela.tamanho=0
myCartela.tabela=[]
myCartela.usados=[]
let boleono = 0
function getCartela(){
    if(boleono==0)myCartela = createCartela25()
    boleono=1
    // console.log("myCartela",myCartela)
    // console.log("cartelaUnidimendional",cartelaUnidimendional)
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
function createCartelaRnd(){
    let tamanho=0
    while(tamanho<2) tamanho=Math.floor((Math.random() * 10) + 1);
    let numbers=[]
   for(let i=0;i<100;i++)numbers.push(i)
   
   let newCartela=[]
   let newUsados=[]
   for(let i=0;i<tamanho;i++){
           shuffleArray(numbers)
           newCartela.push(numbers.pop())
           newUsados.push(0)
        
    }
    myCartela.tamanho = tamanho
    myCartela.tabela = newCartela
    myCartela.usados = newUsados
    return myCartela
}

function createCartela(tamanho){
    if(tamanho>100) tamanho=100
    let numbers=[]
   for(let i=0;i<100;i++)numbers.push(i)
   
   let newCartela=[]
   let newUsados=[]
   for(let i=0;i<tamanho;i++){
           shuffleArray(numbers)
           newCartela.push(numbers.pop())
           newUsados.push(0)
        
    }
    myCartela.tamanho = tamanho
    myCartela.tabela = newCartela
    myCartela.usados = newUsados
    return myCartela
}

function createCartela25(){
    return createCartela(25)
}
//createCartela25()
function updateCartela(pos){
    if(pos==null) return false
    if( pos < myCartela.tamanho && pos>=0){//indice valido
        if(myCartela.usados[pos]==0 && myCartela.tabela[pos]==numeroModel.LASTNUM){
            console.log("acertou")
            myCartela.usados[pos]=1
            console.log("posicao",pos,"foi atualizada")
            return true
        }

    }
    return false
}

module.exports = {
    createCartela,
    createCartela25,
    createCartelaRnd,
    updateCartela,
    getCartela,
    shuffleArray
}
