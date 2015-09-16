describe('Player', function() {
  it("returns zeroed out board", function() {
    var testBoard = new Board([0,0,0,0,0,0,0,0,0]);
    expect(testBoard.board).to.eql([0,0,0,0,0,0,0,0,0]);
  });

  it("marks a space on board", function() {
    var testBoard = new Board([0,0,0,0,0,0,0,0,0]);
    testBoard.markBoard(1,3);
    expect(testBoard.board).to.eql([0,0,0,1,0,0,0,0,0]);
  })

  it("checks for win", function(){
    var testBoard = new Board([1,1,1,2,2,0,0,0,0]);
    expect(testWin(testBoard.board)).to.equal("Player 1 Wins");
  })

  it("checks for win", function(){
    var testBoard = new Board([1,1,0,4,4,4,0,0,0]);
    expect(testWin(testBoard.board)).to.equal("Player 2 Wins");
  })



});

// describe('PlayerTurn', function() {
//   it("returns boolean for if it's player1's turn", function() {
//     var player1 = new PlayerTurn
//     expect(player1).to.equal(1);
//   });
//
// });
