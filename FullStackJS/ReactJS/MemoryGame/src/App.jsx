import { useState } from 'react'
import GameBoard from './GameBoard.jsx'
import './App.css'

function App() {

  return (
    <>
      <div className="header">
        MemoryGame
      </div>
      <GameBoard />
    </>
  )
}

export default App
