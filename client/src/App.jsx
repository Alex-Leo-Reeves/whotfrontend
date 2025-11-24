import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Lobby from './pages/Lobby'
import Game from './pages/Game'
import AISelection from './pages/AISelection'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/game/:roomId" element={<Game />} />
      <Route path="/ai-selection" element={<AISelection />} />
    </Routes>
  )
}

export default App
