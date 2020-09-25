var Encoder = /** @class */ (function () {
    /**
     * @param {Array<String>} data - list of 4 char strings
     * @returns {Encoder} this
     */
    function Encoder(str) {
        this.text = [];
        this.ascii = [];
        this.binary = [];
        this.encoded = 0;
        // Create array of characters from string
        var text = Array.from(str);
        // pad words less than 4 chars with null ascii codes
        while (text.length < 4) {
            text.push('\0');
        }
        // create array of decimal ascii codes
        var ascii = text.map(function (char) { return char.charCodeAt(0); });
        var binary = ascii
            .reduce(function (acc, code) { return acc.concat(code.toString(2)); }, [])
            .map(function (bin) { return '0'.repeat(8 - bin.length).concat(bin); }) // 8-bit int padded with left-leading zeros
            .reverse();
        this.text = text;
        this.ascii = ascii;
        this.binary = binary;
        return this;
    }
    Encoder.prototype.encode = function () {
        if (this.encoded) {
            return this.encoded;
        }
        var encodedStr = '';
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 4; j++) {
                encodedStr += this.binary[j][i];
            }
        }
        this.encoded = parseInt(encodedStr, 2);
        return this.encoded;
    };
    return Encoder;
}());
export { Encoder };
//# sourceMappingURL=Encoder.js.map