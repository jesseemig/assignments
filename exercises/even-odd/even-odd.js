var numbers = [];
function results(){
    var blank = [];
    var blank2 = [];
for (var i = 0; i < 100; i++) {
    if(i % 2 === 0){
        blank = blank + numbers[i];
        console.log("Even");
    } else if (i % 2 != 0) {
        blank2 = blank2 + numbers[i];
        console.log("Odd");
    }
}
}
results()

// or


//for(var i = 0; i <= 100; i++){
 //   if((i % 2 === 0) && (i != 0)) {
 //       console.log("even")
 //   } else if (i % 2 != 0){
 //       console.log("odd");
 //   } else {
 //       console.log("zero");
 //   }
//}
