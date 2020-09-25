"use strict";
// const DataStruct = require('../../src/models/DataStruct.js')
// describe('DataStruct', () => {
//   describe('constructor()', () => {
//     it('accepts a list of strings', () => {
//       const data = [
//         'a',
//         'mocked data'
//       ]
//       expect(() => new DataStruct(data)).not.toThrow()
//     })
//     it('throws a TypeError if data is mal-formated', () => {
//       const malformed = 'adsf'
//       expect(() => new DataStruct(malformed)).toThrow()
//     })
//   })
//   describe('serializedPhrases', () => {
//     it('returns a "serializedPhrases" attribute containing 4 char strings',  () => {
//       const data = [ 'this is a test of DataStruct.js' ]
//       const dataStruct = new DataStruct(data)
//       expect(dataStruct).toEqual([
//         [
//           'this', ' is ',
//           'a te', 'st o',
//           'f Da', 'taSt',
//           'ruct', '.js'
//         ]
//       ])
//     })
//     it('serializes a list of phrases', () => {
//       const data = [
//         'here is ONe Phrase',
//         'This is another, SLIGHTLY different Phrase',
//         ''
//       ]
//       const dataStruct = new DataStruct(data)
//       expect(dataStruct).toEqual([
//         [
//           "here",
//           " is ",
//           "ONe ",
//           "Phra",
//           "se",
//         ],
//         [
//           "This",
//           " is ",
//           "anot",
//           "her,",
//           " SLI",
//           "GHTL",
//           "Y di",
//           "ffer",
//           "ent ",
//           "Phra",
//           "se",
//         ],
//         []
//       ])
//     })
//   })
// })
//# sourceMappingURL=DataStruct.spec.js.map