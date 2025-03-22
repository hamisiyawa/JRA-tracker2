import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/Footer'
import { StoreContextProvider } from './context/StoreContext'
import Details from './pages/project-details/Details';
import Content from './components/main-content/Content';


const App = () => {
  return (
    <div className='app'>
      <Router>
        <StoreContextProvider>
              <Navbar/>
              <Routes> {/* Define your routes */}
                <Route path="/" element={<Content/>} /> {/* Homepage */}
                <Route path="/projects/:id" element={<Details/>} /> {/* Project Details Page */}
              </Routes>
              <Footer/>
          </StoreContextProvider>
      </Router>
    </div>
  )
}

export default App