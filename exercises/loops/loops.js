var name = "Jesse";
for(var i = 0; i < name.length; i++) {
    console.log(name[i]);
}


var string = "oreos";
var letter = "e"
function findIt() {
for (var i = 0; i <= string.length; i++) {
  if (string[i] === letter) {
    console.log(i);
 break;
  } else if(string[i] === string.length) {
  console.log(letter + " was not found in " + string);
  }
  }
  }
  findIt();  

var numberArray = [1, 3, 6, 42, 64, 59];

function findNumber() {
    for(var i = 0; i < numberArray.length; i++) {
    if(numberArray[i] === 42){
        console.log(numberArray[i]);
    break;
    } else if(i === numberArray.length) {
        console.log("could not find");
        }
    }
}

findNumber()



var arrayOfTen =[-1, 7, 2, 3, 5, 42, 3425, 4, 6, 10];

function low() {   
    var lowest = arrayOfTen[0];
   for(var i = 1; i < arrayOfTen.length; i++) {
   if (arrayOfTen[i] < lowest) {
   lowest = arrayOfTen[i];
   }
   }
   console.log(lowest);
 }

low()   




