var addSubmit = document.getElementById("btn1"); 

addSubmit = addEventListener("click", function() {
    var numberOne = document.getElementById("num1").value;
    var numberTwo = document.getElementById("num2").value;
    
    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);
    
    var totalSum = numberOne * numberTwo;
    
    var output = document.getElementById("here1");
    console.log(totalSum);
    
    output.textContent = totalSum;
})



var addSubmit2 = document.getElementById("btn2"); 

addSubmit2 = addEventListener("click", function() {
    var numberOne2 = document.getElementById("num21").value;
    var numberTwo2 = document.getElementById("num22").value;
    
    numberOne2 = parseInt(numberOne2);
    numberTwo2 = parseInt(numberTwo2);
    
    var totalSum2 = numberOne2 - numberTwo2;
    
    var output2 = document.getElementById("here2");
    console.log(totalSum2);
    
    output2.textContent = totalSum2;
})



var addSubmit3 = document.getElementById("btn3");

addSubmit3 = addEventListener("click", function() {
    var numberOne3 = document.getElementById("num31").value;
    var numberTwo3 = document.getElementById("num32").value;
    
    numberOne3 = parseInt(numberOne3);
    numberTwo3 = parseInt(numberTwo3);
    
    var totalSum3 = numberOne3 + numberTwo3;
    
    var output3 = document.getElementById("here3");
    console.log(totalSum3);
    
    output3.textContent = totalSum3;
})