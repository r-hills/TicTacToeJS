var player, computer, mark, turns, spaceNumber, gameOver, newBoard;

$(document).ready(function() {
    $("button").click(function() {
        // read value for 2-player or computer and assign. 4 possible values read from page
        $("button").addClass("hide");
        $(".radio-buttons").addClass("hide");
        gameOver = 0;
        computer = parseInt($("input:radio[name='game-type']:checked").val());
        console.log(computer);
        player = 1;
        turns = 1;
        newBoard = new Board([0,0,0,0,0,0,0,0,0]);
        $(".space").empty();
        $(".player-turn").text(getPlayer());

        // debugger;
        if( computer === 3 ) {
            mark = getMark();
            spaceNumber = smartPick();
            $(".space[value="+spaceNumber+"]").append("<h1 class='"+mark+"'> "+mark+" </h1>");
            $(".player-turn").text(getPlayer());
            testWin(newBoard.board)
        }

        $(".space").one('click', function() {
            // debugger;
            mark = getMark();
            turn($(this).attr("value"));
            $(this).append("<h1 class='"+mark+"'> "+mark+" </h1>");
            if ( !gameOver ) { testWin(newBoard.board); }
            $(".player-turn").text(getPlayer());
            if( computer > 0 && !gameOver ) {
                mark = getMark();
                if ( computer === 1 ) { spaceNumber = randomPick(); }
                else { spaceNumber = smartPick(); }
                $(".space[value="+spaceNumber+"]").append("<h1 class='"+mark+"'> "+mark+" </h1>");
                $(".player-turn").text(getPlayer());
                testWin(newBoard.board)
            }
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
    var wins = [];
        wins[0] = board[0] + board[1] + board[2],
        wins[1] = board[3] + board[4] + board[5],
        wins[2] = board[6] + board[7] + board[8],
        wins[3] = board[0] + board[3] + board[6],
        wins[4] = board[1] + board[4] + board[7],
        wins[5] = board[2] + board[5] + board[8],
        wins[6] = board[6] + board[4] + board[2],
        wins[7] = board[0] + board[4] + board[8];

    var total = player ? 3:12;
    for( var i=0, i < wins.length(), ++i ) {
        if ( wins[i] === total ) {
            gameOver = 1;
            $(".space").off("click");
            alert("Player 1 Wins!");
            location.reload();
        } else if (turns === 10) {
            gameOver = 1;
            alert("Cat's Game");
            location.reload();
        }
    }        
}

function turn(index){
        // debugger;
        if( newBoard.markBoard(player, index) ) {
            player = player ? 0:1;
            turns++;
        } else {
            // Logic for computer or second player
            alert("That number has been taken already!");
        }  // if playing computer on random mode else generates random #
}

function getPlayer() {
    return player ? "Player 1" : "Player 2";
}

function getMark() {
    var temp = player ? "X" : "O";
    //console.log("Temp is: "+temp);
    return temp;
}

function randomPick() {
    do {
         var res = Math.random();
         res = res * 9;
         randomNumber = Math.floor(res);
    } while ( newBoard.board[randomNumber] > 0 );

    newBoard.markBoard(player, randomNumber);
    player = player ? 0:1;
    turns++;

    return randomNumber;
}

function smartPick() {
    smartNumber = 0;
    brd = newBoard.board;

    if( turns < 3 ) { smartNumber = 2;
    } else if( turns < 5 ) {
        if( brd[6] === 0 ) {
            smartNumber = 6;
        }
    } else if ( turns < 7 ) {
        if( brd[4] === 0 ) { smartNumber = 4; }
        else if( brd[0] > 0 ) { smartNumber = 8; }
        else if( brd[1] > 0 || brd[3] > 0 ) {
            smartNumber = 8;
        }
        else if( brd[5] > 0 || brd[7] > 0 ) {
            smartNumber = 1;
        }
    } else if( turns < 9 ) {
        if( brd[4] > 0 ) { smartNumber = 4; }
        if( brd[5] > 0 ) { smartNumber = 7; }
        if( brd[7] > 0 ) { smartNumber = 5; }
    }
    // if ( turns === 7 ) {
    //     if( brd[])
    // }

    if( !smartPick ) {
        smartNumber = randomPick();
    }

    newBoard.markBoard(player, smartNumber);
    player = player ? 0:1;
    turns++;
    return smartNumber;
}
