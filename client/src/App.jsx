import React from 'react'
import Navbar from './components/navbar/navbar'
import Content from './components/main-content/content'
import Footer from './components/footer/Footer'
import { StoreContextProvider } from './context/StoreContext'


const App = () => {
  return (
    <div className='app'>
      <StoreContextProvider>
          <Navbar/>
          <Content/>
          <Footer/>
      </StoreContextProvider>  
    </div>
  )
}

export default App