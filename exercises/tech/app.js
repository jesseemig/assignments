var names = ["Adam", "Nate", "Marcus", "Jesse", "Bob", "Eric", "Dan"];

function group(arr, num) {

    var newArray = [];

    while (arr.length > num) {
        newArray.push(arr.splice(0, num))
    } if (arr.length) {
        newArray.push(arr)
    }

    return newArray;
}

    console.log(group(names, 3))

