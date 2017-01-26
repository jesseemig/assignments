function noDupes(input) {
    string = input.toLocaleLowerCase();
    var uniques = "";
    var duplicates = "";
    for(var i = 0; i < input.length; i++) {
        if (uniques.indexOf(toString[i]) !== -1) { 
            duplicates += input[i];
        } else {
            uniques += input[i];
        }
    }
console.log("no duplicates: " + uniques);
console.log("extras: " + duplicates);
}
noDupes(input);

