var ask = require("readline-sync";)
var Location = require("./location");
var sunkCount = 0;


// function to display the board
function makeBoard() {
    
    // outer array to hold everything
    var board = [];
    for (var i = 0; i < 10; i++) {
        var row = [];
        for (var j = 0; j < 10; j++) {
            row.push(new Location());
        }
        board.push(row);
    } 
    return board;
}
function displayBoard(board) {
    var display = "";
    for (var i = 0; i < board.length; i++) {
        var row = "";
        for (var j = 0; j < board[i].length; j++) {
            row += board[i][j].display;
        }
        display += row +"\n"
    }
    console.log(display);
}
displayBoard(board);


// function main game - user input, validation, loops to keep game running

function playBattleship() {
    
    console.log("Welcome to Battleship\n")
    console.log("Lots of open water n")
    displayBoard(board);
    while ()
    
}


function updateBoard(x, y) {
    board[x][y].guessed = true; 
        if (board[x][y].isShip) {
            board[x][y].display = "x";
            sunkCount++
        } else {
            board[x][y].display = "m"
        }
        displayBoard(board);
}


function getCoord() {
    do {
       var x = parseInt(readline.keyIn("Choose a coordinate 0-9"));
    var x = parseInt(readline.keyIn("Choose a coordinate 0-9"));
    } while (x < 0 || x > 9 || y < 0 || y > 9);
    
    if (x === "q")
    updateBoard(x, y);
    } whi
 updateBoard(x, y);
}


