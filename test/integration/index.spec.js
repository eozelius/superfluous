// const DataStruct = require('../../src/models/DataStruct')
// const Encoder = require('../../src/models/Encoder')

// describe('DataStruct Encoding integration', () => {
//   it('encodes list of data', () => {
//     const data = [
//       'a',
//       '&',
//       'p *:)',
//       'tacocat',
//       'never odd or even',
//       'lager, sir, is regal',
//       "go hang a salami, I'm a lasagna hog",
//       'egad, a base tone denotes a bad age'
//     ]

//     const serializedData = new DataStruct(data)
//     const encodedData = serializedData.map(phrase => {
//       return phrase.map(word => {
//         return new Encoder(word).encode()
//       })
//     })

//     expect(encodedData).toEqual([
//       [
//         17825793
//       ],
//       [
//         1048848
//       ],
//       [
//         33145024,
//         1052673
//       ],
//       [
//         267487694,
//         125043731
//       ],
//       [
//         267657050,
//         233917524,
//         234374596,
//         250875466,
//         17830160
//       ],
//       [
//         267394382,
//         167322264,
//         66212897,
//         200937635,
//         267422503
//       ],
//       [
//         200319795,
//         133178981,
//         234094669,
//         267441422,
//         78666124,
//         99619077,
//         267653454,
//         133178165,
//         124794470
//       ],
//       [
//         267389735,
//         82841860,
//         267651166,
//         250793668,
//         233835785,
//         267665210,
//         99680277,
//         133170194,
//         124782119
//       ]
//     ])
//   })
// })