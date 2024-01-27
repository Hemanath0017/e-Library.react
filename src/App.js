import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Books from './components/Books'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Books/>
      <Footer/>
    </div>
  )
}

export default App