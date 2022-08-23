import React, { useState } from 'react'
import Layout from './layout/Layout'
import Title from '../img/title.gif'

function ModalWindow() {
  const [open, setOpen] = useState(false);


  return (
    <Layout>
      <div className="absolute top-modalr left-modall z-10">
        <button onClick={() => setOpen(!open)}
          className='text-lg text-white'>
          Open / Clouse
        </button>
        {open && (
          <div className="rounded-xl">
            <div className="rounded-xl ">
              <img style={{ width: '50%', height: '50%' }}
                src={Title}
                alt="GIF"
                className='rounded-xl' />
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ModalWindow


