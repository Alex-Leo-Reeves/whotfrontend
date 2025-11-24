import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AISelection() {
  const [difficulty, setDifficulty] = useState('easy')
  const navigate = useNavigate()

  const handleStart = () => {
    // Pass difficulty as query param or state
    navigate(`/game/ai?level=${difficulty}`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-bold mb-6">Select AI Difficulty</h1>
      <select value={difficulty} onChange={e => setDifficulty(e.target.value)}
        className="p-2 border rounded mb-4">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button onClick={handleStart} className="p-2 bg-green-500 text-white rounded">Start Game</button>
    </div>
  )
}
