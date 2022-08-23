import React, { useState } from 'react'

function CreateTodoField({setTodos, todo}) {
    const[title, setTitle] = useState('');

    const addTodo = (title) => {
  
      setTodos(prev => [
        {
          id: new Date(),
          title,
          isCompleted: false,
        },
        ...todo,
      ])
      setTitle('')
    };

  return (
    <div className='flex items-center justify-between mb-4 rounded-xl bg-zinc-700 p-5 w-full'>
        <input
        className='w-full rounded-lg text-black font-semibold px-2'
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
        placeholder='Add a task'
        />
    </div>
  )
}

export default CreateTodoField