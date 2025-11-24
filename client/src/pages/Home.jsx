import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold mb-6">Nigerian Whot by Master Alex</h1>
      <div className="flex gap-4">
        <Link to="/login" className="px-6 py-3 bg-blue-500 text-white rounded">Login</Link>
        <Link to="/register" className="px-6 py-3 bg-green-500 text-white rounded">Register</Link>
      </div>
    </div>
  )
}
