import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Lobby() {
  const [mode, setMode] = useState('room') // room, matchmaking, ai
  const [players, setPlayers] = useState(2)
  const [roomCode, setRoomCode] = useState('')
  const navigate = useNavigate()

  const handleStart = () => {
    if (mode === 'room' && !roomCode) {
      alert('Please enter or generate a room code')
      return
    }
    // Navigate to game page
    navigate(`/game/${roomCode || 'auto'}`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-bold mb-6">Lobby</h1>
      <div className="flex flex-col gap-4">
        <label>
          <span>Mode:</span>
          <select value={mode} onChange={e => setMode(e.target.value)} className="p-2 border rounded">
            <option value="room">Room Code</option>
            <option value="matchmaking">Matchmaking</option>
            <option value="ai">Play vs AI</option>
          </select>
        </label>
        <label>
          <span>Players (2-4):</span>
          <input type="number" min="2" max="4" value={players} onChange={e => setPlayers(e.target.value)}
            className="p-2 border rounded" />
        </label>
        {mode === 'room' && (
          <input type="text" placeholder="Room Code" value={roomCode} onChange={e => setRoomCode(e.target.value)}
            className="p-2 border rounded" />
        )}
        <button onClick={handleStart} className="p-2 bg-blue-500 text-white rounded">Start Game</button>
      </div>
    </div>
  )
}
