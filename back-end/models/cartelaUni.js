let axios = require("axios")

const cartelaUnidimendional = {
    "tamanho":9,
    "tabela":[1,2,3,4,5,6,7,8,9],
    "usados":[0,0,0,0,0,0,0,0,0]
}


let myCartela = cartelaUnidimendional

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

function updateCartela(pos , num){
    if( pos <= myCartela.tamanho && pos>=0){//indice valido
        if(myCartela.usados[pos]==0 && myCartela.tabela[pos]==num){
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
    getCartela
}