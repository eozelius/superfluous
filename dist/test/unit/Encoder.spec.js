"use strict";
// const Encoder = require('../../src/models/Encoder')
// describe('Encoder', () => {
//   describe('constructor()', () => {
//     it('supports string representation', () => {
//       const FRED = new Encoder('FRED')
//       expect(FRED.text).toEqual(['F', 'R', 'E', 'D'])
//     })
//     it('supports Ascii (decimal) representation', () => {
//       const ASDF = new Encoder('ASDF')
//       expect(ASDF.ascii).toEqual([65, 83, 68, 70])
//     })
//     it('supports binary 8bit representation', () => {
//       const qwer = new Encoder('qwer')
//       expect(qwer.binary).toEqual([
//         '01110010',
//         '01100101',
//         '01110111',
//         '01110001',
//       ])
//     })
//     it('pads a ">" 4 char string with null ascii codes', () => {
//       const e = new Encoder('e')
//       expect(e.ascii).toEqual([101, 0, 0, 0])
//     })
//   })
//   describe('encode()', () => {
//     it('encodes a message', () => {
//       const Woot = new Encoder('Woot')
//       expect(Woot.encode()).toEqual(266956663)
//     })
//     it('encodes symbols', () => {
//       const symbols = new Encoder('^^^^')
//       expect(symbols.encode()).toEqual(252706800)
//     })
//   })
// })
//# sourceMappingURL=Encoder.spec.js.map