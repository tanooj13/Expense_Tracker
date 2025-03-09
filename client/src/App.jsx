import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import Register from './Register/Register'
import { AuthProvider } from './context/AuthContext'
import Navigation from './Navigation/Navigation'


export default function App() {
  return (
    <div>
        <BrowserRouter>
        <AuthProvider>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}
