var camelCased = "";

function returnCamelCase (str) {
    var lowerCase = str.toLowerCase();
    for (var i = 0; i < lowerCase.length; i++) {
        if (lowerCase[i] === " " || lowerCase[i] === "-" || lowerCase[i] === "_") {
            camelCased += lowerCase[i + 1].toUpperCase();
            i++
        } else {
            camelCased += lowerCase[i];
        }
    }
    return camelCased;
}

console.log(returnCamelCase("I aTE_fRUIT-ToDaY"))


//  OR


function camelCase(input){
    for(i = 0; i < input.length; i++){
        if(input[i] === " " || input[i] === "/" || input[i] === "_" || input[i] === "-"){
            var y = input.substring(0, i);
            var z = input.substring(i + 1, input.length);
            var upper = z.substring(0, 1).toUpperCase() + z.substring(1);
            input = y + upper;
        }
    }
    console.log(input);
}

camelCase("daniel/bolognino is_cool");