function Person(name, age {
    this.name = name;
        this.age = age;
        this.speak = function() {
    console.log("My name is ${this.name} and I'm ${this.age} years old.");
}
})

var sarah = new Person("Sarah", 31);
sarah.speak();





function Person(name, age) {
    this.name = name;
    this.age = age;
}

person.prototype.speak = function() {
    console.log(`My name is ${this.name} and I'm ${this.age} years old.`)
}

var sarah = new Person("Sarah", 31);
var bob = new Person("Bob", 39);
console.log(sarah);
sarah.speak();