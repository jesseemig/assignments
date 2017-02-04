
function Person(name) {
    this.name = name;
}

Person.prototype.speak = function() {
    console.log(`my name is ${this.name}`);
}




var myArray = [true, false, true, 1, 2, 3, 4, 5, 6,];

var filtered = myArray.filter(function(thing, index, array) {
   
    return thing > 3;
    
})

console.log(filtered)

// -----------------------------------------------------------------

Array.prototype.myFilter = function(callback) {
    var array = this;
    var filteredItems = [];
    for (var i = 0; i < array.length; i++) {
        var iWantThisItemInMyFilteredArray = (callback[i], i, array)
        if (iWantThisItemInMyFilteredArray) {
            filteredItems.push(array[i]);
        }
    }
    return filteredItems;
}

var myArray = [true, false, true, 1, 2, 3, 4, 5, 6,];

var filteredArray = myArray.myFilter(function(item) {
    if (item > 3) {
        return true;
    } else {
        return false;
    }
});
console.log(filteredArray);