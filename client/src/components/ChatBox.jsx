import React, { useState } from 'react'

export default function ChatBox({ onSend }) {
  const [msg, setMsg] = useState('')
  const handleSend = () => {
    onSend(msg)
    setMsg('')
  }
  return (
    <div className="mt-4 flex gap-2">
      <input type="text" value={msg} onChange={e => setMsg(e.target.value)}
        className="border p-2 rounded flex-1" />
      <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded">Send</button>
    </div>
  )
}
