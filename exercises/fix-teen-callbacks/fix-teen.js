function noTeenSum(a, b, c) {
    return fixTeen(a) + fixTeen(b) + fixTeen(c);
}
 


function fixTeen(n) {
    if (n >= 13 && n <= 19 && n !== 15 && n !== 16) {
        n = 0;
    }
    return n;
}


console.log(noTeenSum(1, 2, 3));
console.log(noTeenSum(2, 13, 1));
console.log(noTeenSum(2, 1, 14));
console.log(noTeenSum(2, 15, 14));
