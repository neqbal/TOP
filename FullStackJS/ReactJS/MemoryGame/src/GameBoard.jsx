import {useState} from 'react'
import {createElement} from 'react'
import reactSVG from './assets/react.svg'
import './GameBoard.css'

function Image() {
  return (
    <div className="imageContainer">
      <img src={reactSVG} width='290px' height='340px'></img>
    </div>
  )
}
function GameBoard() {
  const rowArray = []
  for(let i=0; i<2; i++) {
    const col = []
    for(let j=0; j<5; j++) {
      const card = createElement("td", null, <Image />); 
      col[j] = card;
    }
    const row = createElement("tr", null, col);
    rowArray[i] = row
  }
  const TableBody = createElement("tbody", null, rowArray)
  const Table = createElement("table", null, TableBody)
  
  return (
    <>
      <div className="cardHolder">
        {Table}
      </div>
    </>
  )
}


export default GameBoard
