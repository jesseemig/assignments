var string = "aaacodebbb codexxcode cozexxcope";
var looking = ""
function countCode(string) {
   for (var i = 0; i < string.length; i++) 
      var result = string.includes("co" && [a-z]"e"));
       console.log(result);
   }
    
    
    
var codeCounter = 0;
    
function codeCount() {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "c") {
            if (string[i +1] === "o") {
                if (string[i] === "e") {
                    codeCounter +=1;
                }
            }
        }
    }
    return codeCounter;
}
console.log(codeCount("aacodebbb codexxcode cozexxcope"));