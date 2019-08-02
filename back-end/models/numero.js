const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
let axios = require("axios")
let cartelaModel = require("../models/cartela")

function getNumero(){
    let number = -1;
    /*axios.defaults.headers.common['Authorization'] = 'Bearer ya29.Gl9YB0QMhx4vAtEuTg1y0TrGEWxnMuNsBnS1lhtNiAKP0aWRzPMptU0rQd_Cwx2Sz-j-AMyaGX5AzyxrphKSJzYe84ttZXss17W9Rxx19lw7jSRIktpIRMCbQPbJQBdH76w';
    axios.post("https://content-texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyCXd3M-Cb0KvyBMKTNS23nfaoiez6151Go&alt=json",{
        "audioConfig": {
         "audioEncoding": "LINEAR16",
         "pitch": 0,
         "speakingRate": 1
        },
        "input": {
         "text": "1 2 3 4 5 6 7 8 9"
        },
        "voice": {
         "languageCode": "pt-BR"
        }
    })
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    */
   // Creates a client
  const client = new textToSpeech.TextToSpeechClient();

  // The text to synthesize
  const text = 'Hello, world!';

  // Construct the request
  const request = {
    input: {text: text},
    // Select the language and SSML Voice Gender (optional)
    voice: {languageCode: 'pt-BR', ssmlGender: 'NEUTRAL'},
    // Select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };

  // Performs the Text-to-Speech request
  const [response] = client.synthesizeSpeech(request)
  .then(responses => {
      var response = responses[0];
      // doThingsWith(response)
  })
  .catch(err => {
      console.error(err);
  });

  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
    writeFile('output.mp3', response.audioContent, 'binary');
  console.log('Audio content written to file: output.mp3');    
    
    return number;
}

module.exports = {
    getNumero
}