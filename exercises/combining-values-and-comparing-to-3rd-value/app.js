
function calc(a, b) {

    this.a = a;
    this.b = b;

    for (var i = 0; i < a.length; i++) {
        var first = a.indexOf(i);
    for (var j = 0; j < a.length; j++) {
        var second = a.indexOf(j);
        var big = first + second;
    }
        if (big === b) {
            console.log("True: " + first + " plus " + second + " is equal to " + b);
        }
    }
}

var a = [5,6,2,8,9,3,2,8,1];
calc(a, 8);



