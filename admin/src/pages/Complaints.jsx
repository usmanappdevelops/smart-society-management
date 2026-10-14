import React, { useState } from 'react'
import api from '../api'

export default function Complaints() {
  const [complaints, setComplaints] = useState([])

  React.useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem('token')
        const resp = await api.get('/complaints', { headers: { Authorization: `Bearer ${token}` } })
        setComplaints(resp.data.data)
      } catch (err) {
        console.error(err)
      }
    }
    load()
  }, [])

  return (
    <div>
      <h2>Complaints</h2>
      <ul>
        {complaints.map(c => (
          <li key={c.id}>
            <strong>{c.title}</strong> — {c.category} — {c.status}
          </li>
        ))}
      </ul>
    </div>
  )
}
