import React, { useState } from 'react'

import Layout from '../layout/Layout'
import TodoItem from './TodoItem'
import CreateTodoField from './CreateTodoField'

const data = [
  {
    id: 'dsfb',
    title: 'Something interesting',
    isCompleted: false,
  },
  {
    id: 'flkmbl;fb',
    title: 'Something interesting 2',
    isCompleted: false,
  },
  {
    id: 'fklmvkdfm',
    title: 'Finish',
    isCompleted: false,
  },
]

function Todo() {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter(t => t.id !== id))
  };

  return (
    <Layout>
      <div className="absolute top-countert left-counterl
      bg-black bg-opacity-30 rounded-xl p-3 m-auto text-white
      font-medium py-5 h-2/4 overflow-auto ">
        <h1 className='font-extrabold text-center mb-8'>
          Todo for everyday
        </h1>
        {
          todos.map(todo => (
            <TodoItem todo={todo}
              key={todo.id}
              changeTodo={changeTodo}
              removeTodo={removeTodo} />))
        }
        <CreateTodoField setTodos={setTodos}
          todo={todos} />
      </div>
    </Layout>
  )
}

export default Todo