import { DataStruct } from './models/DataStruct'
import { Encoder } from './models/Encoder'
import { hardCodedData1 } from '../data/data_set_1'
import './styles/style.scss'
import './styles/hero.scss'
import './styles/intro.scss'
import './styles/form.scss'

// console.log('[ index.ts ] na() hardCodedData => ', hardCodedData1)

// Load Dataset
let data = hardCodedData1
// if (process.argv[2]) {
//   try {
//     data = require(process.argv[2])
//   } catch (error) {
//     console.error('Import Error: Requested dataset could not imported. =>', process.argv[2], error)
//     data = hardCodedData1
//   }
// } else {
//   data = hardCodedData1
// }

// Prepare/sanitize Dataset for encoding
const dataStruct = new DataStruct(data)
const serializedData = dataStruct.serializedPhrases

const encodedData = serializedData.map(phrase => {
  return phrase.map(word => {
    return new Encoder(word).encode()
  })
})

function sanitize (text: string) : string {
  return text
    .replace(/\W+/g, " ")
    .replace('\\', '')
    .replace('\'', '')
    .replace('\"', '')
    .replace('src', '')
    .replace('href', '')
    .replace('<', '')
    .replace('>', '')
    .replace('=', '')
    .replace('/', '')
    .replace('*', '')
    .replace('&', '')
    .replace(':', '')
}

document.addEventListener("DOMContentLoaded", function() { 
  const encodeInput = <HTMLInputElement>document.getElementById('encode')
  const encodeBtn = <HTMLInputElement>document.querySelector('.submit-encode')
  const encodedContainer = <HTMLInputElement>document.querySelector('.encoded-output-container')
  
  const decodeInput = <HTMLInputElement>document.getElementById('decode')
  const decodeBtn = <HTMLInputElement>document.querySelector('.submit-decode')
  const decodedContainer = <HTMLInputElement>document.querySelector('.decoded-output-container')

  if (encodeBtn) {
    encodeBtn.addEventListener('click', function () {
      try {
        if (encodeInput && encodeInput.value) {
          const textToEncode: string = sanitize(encodeInput.value)
          const structuredData = new DataStruct([textToEncode]).serializedPhrases

          const encodedData = structuredData.map(phrase => {
            return phrase.map(word => {
              return new Encoder(word).encode()
            })
          })

          encodedContainer.innerHTML = JSON.stringify(encodedData[0], null, 2)
        }
      } catch (error) {}
    })
  }

  if (decodeBtn) {
    decodeBtn.addEventListener('click', function () {
      const textToDecode = sanitize(decodeInput.value)
      console.log('DECODE!!!! => ', textToDecode)
    })
  }


})