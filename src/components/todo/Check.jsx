import React from 'react'
import { BsCheck } from 'react-icons/bs'

function Check({ isCompleted }) {
    return (
        <div className={`border-2 rounded-lg border-pink-400
        ${isCompleted ? 'bg-pink-400' : ''}
        w-6 h-6 mr-2 flex items-center`}>
            {isCompleted &&
                <BsCheck size={24} className='text-gray-900' />
            }
        </div>
    )
}

export default Check
