
function antiCaps(inputString, check) {
    var output = "";
    for (var i = 0; i <= inputString.length; i++) {
        if(isCaps(inputString[i])){
            output+= inputString[i].toLowerCase();
        } else {
            output += inputString[i].toUpperCase();
        }
    }
    return str[i].toLocaleUpperCase;
}

function isCaps(letter) {
    return letter === letter.toUpperCase;
}
    
console.log(antiCaps("Hello"));
console.log(antiCaps("racEcar"));
console.log(antiCaps("bAnAnA"));    