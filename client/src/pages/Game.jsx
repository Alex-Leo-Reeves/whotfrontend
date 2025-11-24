import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import PlayerHand from '../components/PlayerHand'
import Card from '../components/Card'
import SoundToggle from '../components/SoundToggle'

const socket = io(import.meta.env.VITE_API_URL)

export default function Game() {
  const [gameState, setGameState] = useState(null)

  useEffect(() => {
    socket.on('startGame', room => setGameState(room))
    socket.on('updateGame', room => setGameState(room))

    // Join room automatically for demo
    socket.emit('joinRoom', { roomId: 'demo', player: { username: 'You' } })
  }, [])

  const playCard = (card) => {
    socket.emit('playCard', { roomId: 'demo', card })
  }

  if (!gameState) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-2">Top Card: {gameState.topCard?.shape} {gameState.topCard?.value}</h2>
      <div className="flex gap-4">
        {gameState.players.map(p => (
          <div key={p.socketId}>
            <h3>{p.username}</h3>
            <PlayerHand cards={p.hand} onPlay={playCard} />
          </div>
        ))}
      </div>
      <SoundToggle />
    </div>
  )
}
