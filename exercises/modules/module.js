// 1 - Overwrite module.exports with a function expression (or declaration)
//module.exports = function(name) {
//    console.log("Hi, " + name);
//}


// 2 - Add a function as a property on the module.exports object
//module.exports.sayHi = function(name) {
//    console.log("Hi, " + name);
//}
//
//module.exports.sayGoodbye = function(name) {
//    console.log("Bye, " + name);
//}

// Another way:

// This is a private function for use within this module only.
//function addExcitement(str) {
//    return str + "!!!!!1!11One";
//}
//
//function sayHiEnthusiastically(name) {
//    console.log("Hi, " + addExcitement(name));
//}
//
//function sayGoodbye(name) {
//    console.log("Bye, " + name);
//}
//
//// Export only what you what to be used by the users of your module
module.exports = {
    sayHi: sayHiEnthusiastically,
    sayBye: sayGoodbye
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log("Hey there, " + this.name + ". You're " + this.age + " years old now. Huh.");
}

// 3 - Export an object created with the constructor
//module.exports = new Person("Jane", 28);

// 4 - Export the constructor itself
module.exports = Person;



