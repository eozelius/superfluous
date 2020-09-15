import { IEncoder } from '../interfaces/IEncoder'

export class Encoder implements IEncoder {  
  text: Array<string> = []
  ascii: Array<number> = []
  binary: Array<string> = []
  encoded: number = 0;

  /**
   * @param {Array<String>} data - list of 4 char strings
   * @returns {Encoder} this
   */
  constructor (str: string) {
    // Create array of characters from string
    let text: Array<string> = Array.from(str)

    // pad words less than 4 chars with null ascii codes
    while (text.length < 4) {
      text.push('\0')
    }

    // create array of decimal ascii codes
    const ascii = text.map(char => char.charCodeAt(0))    

    const binary = ascii
      .reduce((acc: Array<string>, code: number) => acc.concat(code.toString(2)), [])
      .map(bin => '0'.repeat(8 - bin.length).concat(bin)) // 8-bit int padded with left-leading zeros
      .reverse()

    this.text = text
    this.ascii = ascii
    this.binary = binary
    return this
  }

  encode () : number {
    if (this.encoded) {
      return this.encoded
    }
    
    let encodedStr = ''

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 4; j++) {
        encodedStr += this.binary[j][i]
      }
    }

    this.encoded = parseInt(encodedStr, 2)
    return this.encoded
  }
}
