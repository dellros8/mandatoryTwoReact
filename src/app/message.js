/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default function Message(props){

  let message = "";

  if (props.game.line > 0){
    switch(props.game.state) {
      case props.game.state === "plr1":
      message = "Player 1 won"
      break;
      case props.game.state === "plr2":
      message = "Player 2 won"
      break;
    }
  }

  return (
    <div>To be implemented...</div>
  );
}
