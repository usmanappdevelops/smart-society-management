import React, { useEffect, useState } from 'react'
import api from '../api'

export default function Dashboard() {
  const [stats, setStats] = useState({})

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem('token')
        const resp = await api.get('/dashboard', { headers: { Authorization: `Bearer ${token}` } })
        setStats(resp.data.data)
      } catch (err) {
        console.error(err)
      }
    }
    load()
  }, [])

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <StatBox label="Total Users" value={stats.totalUsers || 0} />
        <StatBox label="Approved" value={stats.approvedUsers || 0} />
        <StatBox label="Residents" value={stats.residentUsers || 0} />
        <StatBox label="Guards" value={stats.guardUsers || 0} />
      </div>
    </div>
  )
}

function StatBox({ label, value }) {
  return (
    <div style={{
      minWidth: 180,
      background: '#f0f4ff',
      borderRadius: 8,
      padding: 16,
      border: '1px solid #dfe7ff'
    }}>
      <div style={{ color: '#555', fontSize: 13 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 700 }}>{value}</div>
    </div>
  )
}
