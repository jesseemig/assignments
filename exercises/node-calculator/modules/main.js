var add = require("./add"); 
var Subtractor = require("./sub");
var mul = require("./mul").mul;
var div = require("./div");



function calculator(input1, input2, method) {
    switch (method) {
        case "add":
            return add(input1, input2);
            break;
        case "sub":
            var sub = new Subtractor(input1, input2);
            return sub.Subtractor(input1, input2);
            break;
        case "mul":
            return mul(input1, input2);
            break;
        case "div":
            return div(input1, input2);
            break;
    }
}


console.log(calculator(1, 2, "add"));
console.log(calculator(5, 7, "sub"));
console.log(calculator(8, 4, "mul"));
console.log(calculator(8, 4, "div"));