import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App