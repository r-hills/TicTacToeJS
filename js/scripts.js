var player, mark, turns, newBoard;

$(document).ready(function() {
    $("button").click(function() {
        player = 1;
        turns = 1;
        newBoard = new Board([0,0,0,0,0,0,0,0,0]);
        $(".space").empty();
        $(".player-turn").text(getPlayer());

        $(".space").one('click', function() {
            mark = getMark();
            turn($(this).attr("value"));
            $(this).append("<h1 class='"+mark+"'> "+mark+" </h1>");
            testWin(newBoard.board);
            $(".player-turn").text(getPlayer());
        });
    });
});

function Board(array) {
    this.board = array;
}

Board.prototype.markBoard = function(player, index) {
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
    console.log(board);
    var row1 = board[0] + board[1] + board[2],
        row2 = board[3] + board[4] + board[5],
        row3 = board[6] + board[7] + board[8],
        col1 = board[0] + board[3] + board[6],
        col2 = board[1] + board[4] + board[7],
        col3 = board[2] + board[5] + board[8],
        diag1 = board[6] + board[4] + board[2],
        diag2 = board[0] + board[4] + board[8];

    if(row1 === 3 || row2 ===3 || row3 ===3 || col1 ===3 || col2 ===3 || col3 ===3 || diag1 ===3 || diag2 ===3) {
        $(".space").off("click");
        return alert("Player 1 Wins!");
    } else if (row1 === 12 || row2 ===12 || row3 ===12 || col1 ===12 || col2 ===12 || col3 ===12 || diag1 ===12 || diag2 ===12) {
        $(".space").off("click");
        return alert("Player 2 Wins!");
    } else if (turns === 10) { return alert("Cat's Game"); }
}

function turn(index){
        if( newBoard.markBoard(player, index) ) {
            player = player ? 0:1;
            turns++;
        } else { alert("That number has been taken already!")}  // if playing computer on random mode else generates random #
}

function getPlayer() {
    return player ? "Player 1" : "Player 2";
}

function getMark() {
    var temp = player ? "X" : "O";
    //console.log("Temp is: "+temp);
    return temp;
}

var random = function() {
    return randomNumber = Math.floor((Math.random() * 7 + 1));
}
