import React, { useEffect, useState } from 'react'
import api from '../api'

export default function Visitors() {
  const [visitors, setVisitors] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem('token')
        const resp = await api.get('/visitors', { headers: { Authorization: `Bearer ${token}` } })
        setVisitors(resp.data.data)
      } catch (err) {
        console.error(err)
      }
    }
    load()
  }, [])

  return (
    <div>
      <h2>Visitors</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr><th>Name</th><th>Phone</th><th>Purpose</th><th>Status</th></tr>
        </thead>
        <tbody>
          {visitors.map(v => (
            <tr key={v.id}>
              <td>{v.visitorName}</td>
              <td>{v.visitorPhone}</td>
              <td>{v.purpose}</td>
              <td>{v.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
