import React, { useEffect, useState } from 'react'
import api from '../api'

export default function Bills() {
  const [bills, setBills] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem('token')
        const resp = await api.get('/bills', { headers: { Authorization: `Bearer ${token}` } })
        setBills(resp.data.data)
      } catch (err) {
        console.error(err)
      }
    }
    load()
  }, [])

  return (
    <div>
      <h2>Bills</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr><th>Apartment</th><th>Month</th><th>Amount</th><th>Status</th></tr>
        </thead>
        <tbody>
          {bills.map(b => (
            <tr key={b.id}>
              <td>{b.apartmentNumber}</td>
              <td>{b.month}</td>
              <td>{b.amount}</td>
              <td>{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
