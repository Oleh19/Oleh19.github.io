import React from 'react'
import Square from './Square'

function Board({handleClick, squares}) {
  return (
    <div className='w-2/4 h-auto flex-wrap flex-col self-center'>
        {
            squares.map((square, i) => 
                <Square key={i} value={square} onClick={() => handleClick(i)} />
            )
        }
    </div>
  )
}

export default Board