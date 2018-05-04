import React from 'react';
import {makeMove, newGame} from '../logic';
import Message from './message';
import Tile from './tile';


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
      <Tile key={pos} win={this.state.game.line.includes(pos)} piece={value} callback={() => this.handleClick(pos)}/>
    ));

    return (
      <div>
        <div className="board">
          {tiles}
        </div>
        <div>
          <button onClick={() => this.resetGame()}>Reset Game</button>
        </div>
        <div>
          <Message game={this.state.game} />
        </div>
      </div>
    );
  }
}

