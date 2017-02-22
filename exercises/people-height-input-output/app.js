function height(input) {
    var noTree = input.filter((item) => item !== -1). sort((a, b) => a -b);
    for (var i = 0, j = 0; i <input.length; i ++) {
        if (input[i] === -1) {
                     continue;
        }
        input[i] = noTree[j];
        j++;
    }
    return input;
}

var people = [-1, 150, 190, 170, -1, -1, 160, 180];

console.log(avoidObsticals(people));