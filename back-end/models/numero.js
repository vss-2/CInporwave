let axios = require("axios")
let cartelaModel = require("../models/cartela")

function getNumero(){
    let number = -1;
    axios.defaults.headers.common['Authorization'] = 'Bearer ya29.Gl9YB0QMhx4vAtEuTg1y0TrGEWxnMuNsBnS1lhtNiAKP0aWRzPMptU0rQd_Cwx2Sz-j-AMyaGX5AzyxrphKSJzYe84ttZXss17W9Rxx19lw7jSRIktpIRMCbQPbJQBdH76w';
    axios.post("https://content-texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyCXd3M-Cb0KvyBMKTNS23nfaoiez6151Go&alt=json",{
        
        "audioConfig":
        {
            "audioEncoding": "LINEAR16",
            "pitch": 0,
            "speakingRate":0 
        },
        "input":
        {
            "text": "oi racapet"
        },
        "voice":
        {
            "languageCode": "pt-BR",
            "name": "pt-BR-Standard-A"
        }
    })
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
        
    
    return number;
}

module.exports = {
    getNumero
}