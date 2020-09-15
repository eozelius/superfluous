export class DataStruct {
  serializedPhrases: Array<Array<string>> = []

  /**
   * @param {Array<String>} dataset - list of phrases to be serialized
   * @returns {Array<String>} serializedPhrases - Array Serialized data
   * new DataStruct([
   *   'this',
   *   'is an example',
   *   'of',
   *   'how to serialize'
   * ])
   * // returns: [
   *   ['this'],
   *   ['is a', 'n ex', 'ampl', 'e'],
   *   ['of'],
   *   ['how ', 'to s', 'eria', 'lize']
   * ]
   */
  constructor (dataset: Array<string>) {
    if (!Array.isArray(dataset)) { throw new TypeError('"phrase" argument must be an Array of Strings') }

    // iterate on each phrase
    dataset.forEach(phrase => {
      const serializedPhrase: Array<string> = []

      // split phrase into strings of 4 chars.
      while (phrase.length) {
        // grab the first 4 chars of phrase
        let serialized: string = phrase.substring(0, 4)

        serializedPhrase.push(serialized)

        // remove first 4 chars of phrase
        phrase = phrase.substring(4)
      }

      this.serializedPhrases.push(serializedPhrase)
    })

    return this
  }
}
