import React, { useState } from 'react'
import api from '../api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    try {
      const resp = await api.post('/auth/login', { email, password })
      localStorage.setItem('token', resp.data.token)
      setMessage('Login successful — token saved in localStorage')
    } catch (err) {
      setMessage(err?.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <h2>Admin Login</h2>
      <form onSubmit={submit}>
        <div>
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
