//  var string = "ggggggggxkljfvlsjkfg";

//  function find(string) {
//      var single = "";
//      var duplicates = "";
//      for (var i = 0; i < string.length; i++) { 
//          if (duplicates.indexOf(toString([i]) !== -1)) {
//              duplicates += string[i];
//          } else {
//              single += string[i];
//              }
//      console.log(single);
//  }
//  }

//  find();

function firstRepeat(string) {
    checkLetter = "";
    for (var i = 0; i < string.length; i++) {
        if (checkLetter === "") {
            checkLetter += string[i];
        } else if (checkLetter.indexOf(string[i]) < 0) {
            console.log (string[i]);
            break;
        }
    }
}

firstRepeat("gggggysudfygsuvy");