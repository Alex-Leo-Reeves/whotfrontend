import React, { useState } from 'react'

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(true)
  const toggle = () => setEnabled(!enabled)
  return (
    <button onClick={toggle} className="mt-4 p-2 border rounded">
      Sound: {enabled ? 'On' : 'Off'}
    </button>
  )
}
