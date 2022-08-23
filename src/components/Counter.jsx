import React, { useState } from 'react'
import Layout from './layout/Layout'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className='absolute top-countert left-counterl bg-black bg-opacity-25 rounded-xl p-3'>
        <div className='text-xl text-center'>
          <h2 className='p-5 text-3xl text-white'>Counter:</h2>
          <h1 className='text-4xl text-white'>{count}</h1>
          <button onClick={() => setCount(count + 1)}
            className='p-5 text-3xl text-white'>Plus(+)
          </button>
          <button onClick={() => setCount(count - 1)}
            className='p-5 text-3xl text-white'>Minus(-)
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Counter