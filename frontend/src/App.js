import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { store } from './store/store'
import { Provider } from 'react-redux'

import Home from './components/pages/Home/Home'
import About from './components/pages/About'
import Navbar from './components/Navbar'
import Signup from './components/pages/SignupPage/Signup'
import LoginPage from './components/pages/LoginPage/LoginPage'
import NotFound from './components/pages/NotFound'

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
