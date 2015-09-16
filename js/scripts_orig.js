$(document).ready(function() {
    $("button").click(function() {

        game();



    });
});



function Board(array) {
    this.board = array;
}

Board.prototype.markBoard = function(index,player) {
    if(this.board[index] === 0 && player ) {
        this.board[index] = 1;
        return 1;
    } else if (this.board[index] === 0 && player === 0 ){
        this.board[index] = 4;
        return 1;
    } else {
        return 0;
    }
}

function testWin(board) {
    // debugger;
    var row1 = eval(board.slice(0,3).join("+")),
        row2 = eval(board.slice(3,6).join("+")),
        row3 = eval(board.slice(6).join("+")),
        col1 = board[0] + board[3] + board[6],
        col2 = board[1] + board[4] + board[7],
        col3 = board[2] + board[5] + board[8],
        diag1 = board[6] + board[4] + board[2],
        diag2 = board[0] + board[4] + board[8];

    if(row1 === 3 || row2 ===3 || row3 ===3 || col1 ===3 || col2 ===3 || col3 ===3 || diag1 ===3 || diag2 ===3) {
      return 1;
    } else if (row1 === 12 || row2 ===12 || row3 ===12 || col1 ===12 || col2 ===12 || col3 ===12 || diag1 ===12 || diag2 ===12) {
        return 4;
    } else return 0;
}

var random = function() {
    return randomNumber = Math.floor((Math.random() * 7 + 1));
}

// function Board() {
//    board : [0,0,0,0,0,0,0,0,0];
// }

function game(){
    var player = 1;
    var input, win = 0;
    var newBoard = new Board([0,0,0,0,0,0,0,0,0]);
    var turns = 0;
    // do while win != true
    //debugger;
    do {
        input = parseInt(prompt("Pick a index!"));

        if( newBoard.markBoard(input,player) ) {
            player = player ? 0:1;
            turns++;
        }  else { alert("That number has been taken already!")}// if playing computer on random mode else generates random #
        console.log(newBoard.board);

        if( turns > 4 && (win = testWin(newBoard.board)) ) {
            break;
        }

    } while( turns < 9 || testWin(newBoard.board) < 1)


    if (win === 1) {
        alert("Player 1 Wins!");
    } else if (win === 4) {
        alert("Player 2 Wins!");
    } else {
        alert("Tie Game");
    }
}
