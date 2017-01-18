var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz"; 


function forception(people, alphabet) {
    var final = [];
    var alphabet = alphabet.toUpperCase();
    for (var i = 0; i < people.length; i++) {
        final.push(people[i] + ":");
        for (var j = 0; j < alphabet.length; j++) {
            final.push(alphabet[j]);
        }
    }
    return final;
}
console.log(forception(people, alphabet));

