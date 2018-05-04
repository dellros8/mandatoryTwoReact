import React from 'react';


export default function Message(props){

  let message = {
    plr1: "Player 1's turn",
    plr2: "Player 2's turn",
    plr1won: "Player 1 won!!",
    plr2won: "Player 2 won!!",
    draw: "It's a draw."
  };

  return (
    <p>{message[props.game.state]}</p>
  );
}
