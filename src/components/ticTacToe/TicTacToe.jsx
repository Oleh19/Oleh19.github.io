import React, { useState } from 'react'

import calculate from './Calculate'
import Layout from '../layout/Layout'
import Board from './Board'

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXisNext] = useState(true)
  const winner = calculate(board)

  const handleClick = (index) => {
    const boardCopy = [...board]
    if (winner || boardCopy[index]) return
    boardCopy[index] = xIsNext ? 'x' : '0'
    setBoard(boardCopy)
    setXisNext(!xIsNext)
  }

  const newGame = () => {
    return (
      <button className='text-white font-extrabold my-2
      cursor-pointer outline-none hover:bg-cyan-500
      hover:text-black transition-colors duration-300
      ease-in-out rounded-lg p-2 active:bg-cyan-600 active:text-white'
        onClick={() => setBoard(Array(9).fill(null))}>
        New Game
      </button>
    )
  }

  return (
    <Layout>
      <div className="absolute top-24 left-0 bg-black bg-opacity-20
      w-full flex justify-center items-center flex-col rounded-xl">
        {newGame()}
        <Board
          squares={board}
          handleClick={handleClick}
        />
        <p className=' pb-2 font-extrabold text-white'>
          {
            winner ? 'Winner is ' + winner : (xIsNext ? 'First' : 'Second') + ' player`s turn'
          }
        </p>
      </div>
    </Layout>
  )
}

export default TicTacToe