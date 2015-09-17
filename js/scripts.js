var player, mark, turns, newBoard;

$(document).ready(function() {

    $("button").click(function() {
        player = 1;
        turns = 1;
        newBoard = new Board([0,0,0,0,0,0,0,0,0]);
        resetBoard();
        $(".player-turn").text(getPlayer());

        $(".zero").one('click', function() {
            mark = getMark();
            turn(0);
            $(".zero").append("<h1 class='"+mark+"'> "+mark+" </h1>");
            testWin(newBoard.board);
            $(".player-turn").text(getPlayer());
        });

        $(".one").one('click', function() {
            mark = getMark();
            turn(1);
            $(".one").append("<h1 class='"+mark+"'> "+mark+" </h1>");
            testWin(newBoard.board);
            $(".player-turn").text(getPlayer());
        });
        $(".two").one('click', function() {
            mark = getMark();
            turn(2);
            $(".two").append("<h1 class='"+mark+"'> "+mark+" </h1>");
            testWin(newBoard.board);
            $(".player-turn").text(getPlayer());
        });
        $(".three").one('click', function() {
            mark = getMark();
            turn(3);
            $(".three").append("<h1 class='"+mark+"'> "+mark+" </h1>");
            testWin(newBoard.board);
            $(".player-turn").text(getPlayer());
        });
        $(".four").one('click', function() {
            mark = getMark();
            turn(4);
            $(".four").append("<h1 class='"+mark+"'> "+mark+" </h1>");
            testWin(newBoard.board);
            $(".player-turn").text(getPlayer());
        });
        $(".five").one('click', function() {
            mark = getMark();
            turn(5);
            $(".five").append("<h1 class='"+mark+"'> "+mark+" </h1>");
            testWin(newBoard.board);
            $(".player-turn").text(getPlayer());
        });
        $(".six").one('click', function() {
            mark = getMark();
            turn(6);
            $(".six").append("<h1 class='"+mark+"'> "+mark+" </h1>");
            testWin(newBoard.board);
            $(".player-turn").text(getPlayer());
        });
        $(".seven").one('click', function() {
            mark = getMark();
            turn(7);
            $(".seven").append("<h1 class='"+mark+"'> "+mark+" </h1>");
            testWin(newBoard.board);
            $(".player-turn").text(getPlayer());
        });
        $(".eight").one('click', function() {
            mark = getMark();
            turn(8);
            $(".eight").append("<h1 class='"+mark+"'> "+mark+" </h1>");
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

    if (turns === 10) { return alert("Tie Game"); }

    if(row1 === 3 || row2 ===3 || row3 ===3 || col1 ===3 || col2 ===3 || col3 ===3 || diag1 ===3 || diag2 ===3) {
        $(".space").off("click");
        return alert("Player 1 Wins!");
    } else if (row1 === 12 || row2 ===12 || row3 ===12 || col1 ===12 || col2 ===12 || col3 ===12 || diag1 ===12 || diag2 ===12) {
        $(".space").off("click");
        return alert("Player 2 Wins!");
    }

    // Turn off listeners


}



var random = function() {
    return randomNumber = Math.floor((Math.random() * 7 + 1));
}

// function Board() {
//    board : [0,0,0,0,0,0,0,0,0];
// }

function turn(index){
    // var player = 1;
    //var input, win = 0;
    // var newBoard = new Board([0,0,0,0,0,0,0,0,0]);
    // var turns = 0;
    // do while win != true
    //debugger;
    // do {
        // input = parseInt(prompt("Pick a index!"));

        if( newBoard.markBoard(player, index) ) {
            player = player ? 0:1;
            //console.log("Player is: "+player);
            turns++;
        }  else { alert("That number has been taken already!")}// if playing computer on random mode else generates random #
        //console.log(newBoard.board);

        // if( turns > 4 && (win = testWin(newBoard.board)) ) {
        //     return win;
        // }

    // } while( turns < 9 || testWin(newBoard.board) < 1)

}

function getPlayer() {
    return player ? "Player 1" : "Player 2";
}

function getMark() {
    var temp = player ? "X" : "O";
    //console.log("Temp is: "+temp);
    return temp;
}

function checkWin() {
    if (win === 1) {

    } else if (win === 4) {
        ;
    } else {
        ;
    }
}

function resetBoard() {
    $(".zero").empty();
    $(".one").empty();
    $(".two").empty();
    $(".three").empty();
    $(".four").empty();
    $(".five").empty();
    $(".six").empty();
    $(".seven").empty();
    $(".eight").empty();
}
