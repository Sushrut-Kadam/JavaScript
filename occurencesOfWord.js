/**
 * Title: Counting the occurences of a word in a paragraph
 */

//---------------------------------------------------------------------------------

const input = `Symmetric Key Cryptography also known as Symmetric Encryption 
                is when a secret key is leveraged for both encryption and decryption
                functions. This method is the opposite of Asymmetric Encryption 
                where one key is used to encrypt and another is used to decrypt. 
                During this process, data is converted to a format that cannot be
                read or inspected by anyone who does not have the secret key that
                was used to encrypt it`;

const paragraph = input.toLowerCase();
const key = "encrypt";

// console.log(paragraph.length);
// console.log(paragraph.indexOf(key, 0));

var position = 0;
var count = -1;

while(current != -1){
    var current = paragraph.indexOf(key, position);
    position = current+1;
    count++;
}

console.log(count, "occurences. \r\n");
