import React from 'react'
import './TicTacToe.css'
import circle from '../Assets/circle.png'
import cross from '../Assets/cross.png'

const TicTacToe = () => {
  return (
    <div className='container'>
      <h1 className="title">Tic Tac Toe Game</h1>

      <div className="board">

      </div>

      <button className="reset">Reset</button>
    </div>
  )
}

export default TicTacToe
