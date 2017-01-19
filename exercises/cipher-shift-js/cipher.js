var ask = require('readline-sync');
var input = ask.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(ask.question('How many letters would you like to shift? '));
var alphabet = "abcdefghijklmnopqrstuvwxyz";


function caesarCipher(input, shift) {
    var shifted = "";
    for (var i = 0; i < input.length; i++) {
        if (alphabet.indexOf(input[i]) < 0) {
            shifted += input[i];
        } else if (alphabet.indexOf(input[i]) + shift > 25) {
            shifted += alphabet[alphabet.indexOf(input[i]) + shift - 26];
        } else {
            shifted += alphabet[alphabet.indexOf(input[i]) + shift];
        }
    }
    return shifted;
}

console.log(caesarCipher(input, shift));