import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Home() {
 
  const {user}=useContext(AuthContext)
  const navigate=useNavigate()
 
  return (
    <div>

        <h1>Welcome to Home Page</h1>
    </div>
  )
}