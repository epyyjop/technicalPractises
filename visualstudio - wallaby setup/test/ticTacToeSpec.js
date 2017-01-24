describe("TicTacToe with sandbags", function(){
  describe("Should allow for valid moves", function() {
    it("should allow for X to be the first move", function() {
      var game = new TicTacToe();
      expect(game.makeMove(Players.X)).toEqual(MoveStatus.VALID);
    });
     it("should not allow for O to be the first move", function(){
       var game = new TicTacToe();
       expect(game.makeMove(Players.O)).toEqual(MoveStatus.INVALID);
    });
    it("should allow for O to be the 2nd move", function() {
      var game = new TicTacToe();
      game.makeMove(Players.X);
      expect(game.makeMove(Players.O)).toEqual(MoveStatus.VALID);
    });

    it("should allow for O to be the 4th move", function() {
      var game = new TicTacToe();
      game.makeMove(Players.X);
      game.makeMove(Players.O);
      game.makeMove(Players.X);
      expect(game.makeMove(Players.O)).toEqual(MoveStatus.VALID);
    });
    it("should not allow for X to be the 4th move", function() {
      var game = new TicTacToe();
      game.makeMove(Players.X);
      game.makeMove(Players.O);
      game.makeMove(Players.X);
      expect(game.makeMove(Players.X)).toEqual(MoveStatus.INVALID);
    });
  });

  describe("Should allow moves in empty cells", function() {
    it("should allow the first X move to be in any position", function(){
      var game = new TicTacToe();
      var playerXMove = new PlayerMove(Players.X, new MovePosition(0));
      expect(game.makeMove(playerXMove)).toEqual(MoveStatus.VALID);
    });
  });
});

var Players = {
  X: 0,
  O: 1
};

var MoveStatus = {
  INVALID: 0,
  VALID: 1
};

function TicTacToe() {
  this.lastPlayerToMove = Players.O;
};

function PlayerMove() {};

function MovePosition() {};

TicTacToe.prototype.makeMove = function(player) {
  if ( (player === Players.X || player === Players.O ) && player !== this.lastPlayerToMove)
  {
    this.lastPlayerToMove = player;
    return MoveStatus.VALID;
  }

  return MoveStatus.INVALID;
};
