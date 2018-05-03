import React from 'react';

import {makeMove, newGame} from '../logic';

import Message from './message';
import Tile from './tile';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles within an element with a `board` CSS class.
*/

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      game: newGame()
    }
  }

  handleClick(pos) {
    let newState = makeMove(this.state.game, pos);
    this.setState({game: newState});
  }

  resetGame() {
    this.setState({game: newGame()})
  }

  render(){
    const tiles = this.state.game.board.map((value, pos) => (
      <Tile key={pos} piece={value} callback={() => this.handleClick(pos)}/>
    ));

    return (
      <div className="container">
      <div className="board">
        {tiles}
      </div>
      <button onClick={() => this.resetGame()}>Reset Game</button>
      <Message game={this.state.game} />
      </div>
    );
  }
}
