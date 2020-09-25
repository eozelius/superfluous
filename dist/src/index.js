import { DataStruct } from './models/DataStruct';
import { Encoder } from './models/Encoder';
import { hardCodedData1 } from '../data/data_set_1';
// import './styles/style.scss'
// import './styles/hero.scss'
// import './styles/intro.scss'
// import './styles/form.scss'
// import './styles/gists.scss'
// import './styles/howitworks.scss'
// console.log('[ index.ts ] na() hardCodedData => ', hardCodedData1)
// Load Dataset
var data = hardCodedData1;
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
var dataStruct = new DataStruct(data);
var serializedData = dataStruct.serializedPhrases;
var encodedData = serializedData.map(function (phrase) {
    return phrase.map(function (word) {
        return new Encoder(word).encode();
    });
});
function sanitize(text) {
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
        .replace(':', '');
}
document.addEventListener("DOMContentLoaded", function () {
    var encodeInput = document.getElementById('encode');
    var encodeBtn = document.querySelector('.submit-encode');
    var encodedStringContainer = document.querySelector('.interactive-text-output .decoded-container');
    var encodedSuperContainer = document.querySelector('.interactive-text-output .encoded-container');
    var decodeInput = document.getElementById('decode');
    var decodeBtn = document.querySelector('.submit-decode');
    var decodedContainer = document.querySelector('.decoded-output-container');
    if (encodeBtn) {
        encodeBtn.addEventListener('click', function () {
            try {
                if (encodeInput && encodeInput.value) {
                    var textToEncode = sanitize(encodeInput.value);
                    var structuredData = new DataStruct([textToEncode]).serializedPhrases;
                    var encodedData_1 = structuredData.map(function (phrase) {
                        return phrase.map(function (word) {
                            return new Encoder(word).encode();
                        });
                    });
                    var stringDiv = document.createElement('div');
                    stringDiv.classList.add('row');
                    var stringP = document.createElement('p');
                    stringP.classList.add('superfluous');
                    stringP.innerHTML = textToEncode;
                    stringDiv.appendChild(stringP);
                    encodedStringContainer.appendChild(stringDiv);
                    var encodedDiv = document.createElement('div');
                    encodedDiv.classList.add('row');
                    var encodedP = document.createElement('p');
                    encodedP.classList.add('superfluous');
                    encodedP.innerHTML = JSON.stringify(encodedData_1[0], null, 2);
                    encodedDiv.appendChild(encodedP);
                    encodedSuperContainer.appendChild(encodedDiv);
                }
            }
            catch (error) {
                console.error('error => ', error);
            }
        });
    }
    if (decodeBtn) {
        decodeBtn.addEventListener('click', function () {
            var textToDecode = sanitize(decodeInput.value);
            console.log('DECODE!!!! => ', textToDecode);
        });
    }
});
//# sourceMappingURL=index.js.map