# [266799643, 233942096, 268249007, 212897865, 265373642, 267917205]

### or in layman's terms

# Super(fluous) BitEncoder - Built with TypeScript
Everyone likes strings, but you'll love **Super(fluous)** Bit-Encoded!

## How it works
The Super(fluous) Encoder scrambles bundles of 4 characters into 32-bit integer values.  
1. Take a string and break it into 4 letter chucks.
`"I believe you have my stapler"`
is converted to
`["I be", "liev", "e yo", "u ha", "ve m", "y st", "aple", "r" ]`

2. Convert each letter to Ascii
`["I be", "liev", "e yo", "u ha", "ve m", "y st", "aple", "r" ]`
is converted to
```
[
  [ 73, 32, 98, 101 ],
  [ 108, 105, 101, 118 ],
  [ 101, 32, 121, 111 ],
  [ 117, 32, 104, 97 ],
  [ 118, 101, 32, 109 ],
  [ 121, 32, 115, 116 ],
  [ 97, 112, 108, 101 ],
  [ 114, 0, 0, 0 ]
]
```

3. Then Convert Ascii to 8 bit Binary
```
[
  [ 73, 32, 98, 101 ],
  [ 108, 105, 101, 118 ],
  [ 101, 32, 121, 111 ],
  [ 117, 32, 104, 97 ],
  [ 118, 101, 32, 109 ],
  [ 121, 32, 115, 116 ],
  [ 97, 112, 108, 101 ],
  [ 114, 0, 0, 0 ]
]
```

is converted to
```

[
  [ '01100101', '01100010', '00100000', '01001001' ],
  [ '01110110', '01100101', '01101001', '01101100' ],
  [ '01101111', '01111001', '00100000', '01100101' ],
  [ '01100001', '01101000', '00100000', '01110101' ],
  [ '01101101', '00100000', '01100101', '01110110' ],
  [ '01110100', '01110011', '00100000', '01111001' ],
  [ '01100101', '01101100', '01110000', '01100001' ],
  [ '00000000', '00000000', '00000000', '01110010' ]
]
```

3. Then Scramble the 8 bit numbers
a. Place the first character of the first 8 bit number into the first digit of a 32 bit number

b. Place the first character of second 8 bit number into the second digit of a 32 bit number

c. Place the first character of third 8 bit number into the third digit of a 32 bit number

d. Place the first character of fourth 8 bit number into the fourth digit of a 32 bit number

e. repeat the process until all 32 bits are filled

example: `[ '01100101', '01100010', '00100000', '01001001' ]` 
will be converted to
`0000 1101 1110 0000 0001 1000 0101 1001`

4. Convert the 8 bit number into a decimal number
`0000 1101 1110 0000 0001 1000 0101 1001`
will be converted to
`232790089`


## In Action
[bit-encoder.ethanoz.com](https://bit-encoder.ethanoz.com)

## An Office Space example
| String                                                 | Super(fluous) Bit-Encoded |
|--------------------------------------------------------|:-------------------------:|
| I'm gonna need you to go ahead and come in Saturday... | [98588199, 267448307, 233851977, 200835849, 200940307, 233872861, 250628106, 200278537, 200283032, 133183255, 192426665, 268306053, 133482886, 3158832] |
| I believe you have my stapler                          | [232790089, 267926918, 234146189, 233914633, 200379162, 234690629, 267537417, 17891344] |
| What would you say ya do here?                         | [266938645, 251285102, 200839944, 200938395, 200974347, 233868425, 251143300, 20063011] |