export const newGame = () => ({
  state: 'plr1',
  board: [0,0,0,0,0,0,0,0,0],
  line: []
});

export const makeMove = (game, pos) => {

  if (game.board[pos] !== 0) return game;
  if (game.line.length > 0) return game;

  const currentPlayer = game.state === 'plr1' ? 1 : 2;
  const newBoard = game.board.map((tile, index) => pos === index ? currentPlayer : tile);
  const winPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  const winPath = winPatterns.find(path => path.every(tile => newBoard[tile] === currentPlayer));
  const draw = newBoard.filter(value => value > 0).length === 9;
  const state = winPath ? game.state + "won" : draw ? "draw" : game.state === "plr1" ? "plr2" : "plr1";

  return {
   state,
   board: newBoard,
   line: winPath || []
  }
}