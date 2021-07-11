/**
 * Title: Shift cipher
 */
//-------------------------------------------------------------

const shiftValue = 3;

const plaintext = "vwxy";
var ciphertext = "";

for(var char in plaintext){
    var code = plaintext.codePointAt(char);
    code = code-97;
    code = (code+shiftValue)%26;
    code = code+97;
    ciphertext += String.fromCodePoint(code);
}

console.log(plaintext);
console.log(ciphertext);