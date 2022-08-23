import React from 'react'

function Square(props) {
    return (
        <button className='w-1/3 h-customsq border-2 border-zinc-800 rounded-md cursor-pointer
        text-zinc-800 hover:bg-green-500 transition-colors duration-300 ease-in-out
        active:bg-green-700 text-custom'
            onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square