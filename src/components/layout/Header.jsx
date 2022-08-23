import React from 'react'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='h-auto w-full text-lg text-white font-bold fixed
    top-0 left-0 text-center inline-flex flex-wrap justify-evenly py-2'>
      <div className='p-1 hover:text-black active:text-pink-400'>
        <Link to="/">Home</Link>
      </div>
      <div className='p-1 hover:text-black active:text-pink-400'>
        <Link to="/counter">Counter</Link>
      </div>
      <div className='p-1 hover:text-black active:text-pink-400'>
        <Link to="/modalWindow">ModalWindow</Link>
      </div>
      <div className='p-1 hover:text-black active:text-pink-400'>
        <Link to="/quiz">Quiz</Link>
      </div>
      <div className='p-1 hover:text-black active:text-pink-400'>
        <Link to="/todo">Todo</Link>
      </div>
      <div className='p-1 hover:text-black active:text-pink-400'>
        <Link to="/ticTacToe">TicTacToe</Link>
      </div>
    </div>
  )
}

export default Header