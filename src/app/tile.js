import React from 'react';


export default function Tile(props){
  let css = "tile";
  let sign = "";
  
  switch(props.piece) {
    case 0:
    break;
    case 1:
    sign = "X"
    css += " plr1"
    break;
    case 2:
    sign = "O"
    css += " plr2"
    break;
  }
  return (
      <div onClick={props.callback} className={props.win ? `${css} line` : css}>{sign}</div>
  );
}
