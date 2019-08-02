// Imports the Google Cloud client library.
// const {Storage} = require('@google-cloud/storage');

// // Instantiates a client. If you don't specify credentials when constructing
// // the client, the client library will look for credentials in the
// // environment.
// const storage = new Storage();

// // Makes an authenticated API request.
// storage
//   .getBuckets()
//   .then(results => {
//     const buckets = results[0];

//     console.log('Buckets:');
//     buckets.forEach(bucket => {
//       console.log(bucket.name);
//     });
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });


  
let cartelaUniModel = require("./cartelaUni")
let LASTNUM=0

/**
 * Copyright 2018, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START tts_quickstart]
// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Import other required libraries
const fs = require('fs');
const util = require('util');

async function main() {
  // Creates a client
  const client = new textToSpeech.TextToSpeechClient();

  let tabela = cartelaUniModel.getCartela().tabela.slice()
  cartelaUniModel.shuffleArray(tabela)
  console.log("original",cartelaUniModel.getCartela().tabela)
  console.log("shuffled",tabela)

  // The text to synthesize
  const text = tabela[tabela.length-1];
  LASTNUM=text //salva pra comparacao pelo update do cartela uni
 
 
  console.log(text)
  // Construct the request
  const request = {
    input: {text: text},
    // Select the language and SSML Voice Gender (optional)
    voice: {languageCode: 'pt-BR', ssmlGender: 'MALE'},
    // Select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };

  // Performs the Text-to-Speech request
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  console.log(response.audioContent)
  await writeFile('output.mp3', response.audioContent, 'binary');
  console.log('Audio content written to file: output.mp3');
  ////retornar audio em base 64 aqui
}
// [END tts_quickstart]
main().catch(console.error);

module.exports = {
    main
}
//colocar esse caminho na path pra rodar o servidor
//export GOOGLE_APPLICATION_CREDENTIALS="/home/ze/Desktop/apitts.json"
