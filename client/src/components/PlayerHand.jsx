import React from 'react'
import Card from './Card'

export default function PlayerHand({ cards, onPlay }) {
  return (
    <div className="flex gap-2 mt-2">
      {cards.map((card, idx) => (
        <Card key={idx} card={card} onClick={() => onPlay(card)} />
      ))}
    </div>
  )
}
