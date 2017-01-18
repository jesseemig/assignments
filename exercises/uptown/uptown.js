var lyrics = ["This", "hit", "that", "ice", "cold",
  "Michelle", "Pfeiffer", "that", "white",
  "gold", "This", "one", "for", "them",
  "hood", "girls", "Them", "good", "girls",
  "straight", "masterpieces", "Stylin'",
  "whilen'", "livin'", "it", "up", "in",
  "the", "city", "Got", "Chucks", "on",
  "with", "Saint", "Laurent", "Gotta", "kiss",
  "myself", "I'm", "so", "pretty"];

function upTown() {
  var changes = "";
  for(var i = 0; i < lyrics.length; i++) {
  changes = changes + lyrics[i] + " ";
  }
  console.log(changes);
}
upTown();




function backWards() {
    var hope = "";
    hope = lyrics.reverse().join(" ");
    console.log(hope);
}

backWards(lyrics);




function everyOther() {
    var words = "";
    for(var i = 0; i < lyrics.length; i += 2) {
        words = words + lyrics[i] + " ";
    }
     console.log(words);
}
everyOther();