import React from 'react'

import Header from './Header'
import MainContainer from './MainContainer'

function Layout({ children }) {
  return (
    <>
      <Header />
      <MainContainer />
      {children}
    </>
  )
}

export default Layout