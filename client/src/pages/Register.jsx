import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, { username, email, password })
      localStorage.setItem('token', res.data.token)
      navigate('/lobby')
    } catch (err) {
      alert(err.response?.data?.msg || 'Registration failed')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}
          className="p-2 border rounded" required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
          className="p-2 border rounded" required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
          className="p-2 border rounded" required />
        <button type="submit" className="p-2 bg-green-500 text-white rounded">Register</button>
      </form>
    </div>
  )
}
