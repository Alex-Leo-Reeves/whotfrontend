import React from 'react'

export default function Card({ card, onClick }) {
  return (
    <div className="w-16 h-24 bg-gray-100 border p-2 rounded cursor-pointer hover:bg-gray-200" onClick={onClick}>
      <p className="text-sm">{card.shape}</p>
      <p className="text-lg font-bold">{card.value}</p>
    </div>
  )
}
