class ChessGame {
  constructor() {
    this.chessBoard = document.querySelector("#chess-board");
    this.generateBoard();
  }

  generateBoard() {
    for (let y = 1; y <= 8; y++) {
      for (let x = 1; x <= 8; x++) {
        let square = document.createElement("div");
        square.id = positionToNotation(y * 10 + x);
        square.classList.add("board-square");
        square.classList.add((x + y) % 2 ? "dark" : "light");
        this.chessBoard.appendChild(square);
      }
    }
  }
}

function positionToNotation(position) {
  return (
    String.fromCharCode(96 + Math.floor(position / 10)) +
    (position - Math.floor(position / 10) * 10)
  );
}

function notationToPosition(notation) {
  return (notation.charCodeAt(0) - 96) * 10 + Number(notation.slice(1));
}

let game = new ChessGame();
