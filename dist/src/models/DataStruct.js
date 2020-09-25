var DataStruct = /** @class */ (function () {
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
    function DataStruct(dataset) {
        var _this = this;
        this.serializedPhrases = [];
        if (!Array.isArray(dataset)) {
            throw new TypeError('"phrase" argument must be an Array of Strings');
        }
        // iterate on each phrase
        dataset.forEach(function (phrase) {
            var serializedPhrase = [];
            // split phrase into strings of 4 chars.
            while (phrase.length) {
                // grab the first 4 chars of phrase
                var serialized = phrase.substring(0, 4);
                serializedPhrase.push(serialized);
                // remove first 4 chars of phrase
                phrase = phrase.substring(4);
            }
            _this.serializedPhrases.push(serializedPhrase);
        });
        return this;
    }
    return DataStruct;
}());
export { DataStruct };
//# sourceMappingURL=DataStruct.js.map