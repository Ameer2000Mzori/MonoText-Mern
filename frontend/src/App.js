import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Navbar from './components/Navbar'
import { LoginPage } from './components/pages/LoginPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
