import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Visitors from './pages/Visitors'
import Bills from './pages/Bills'

export default function App() {
  return (
    <div>
      <nav style={{ padding: 12, background: '#0b5fff', color: '#fff' }}>
        <Link to="/" style={{ color: '#fff', marginRight: 12 }}>Dashboard</Link>
        <Link to="/visitors" style={{ color: '#fff', marginRight: 12 }}>Visitors</Link>
        <Link to="/bills" style={{ color: '#fff' }}>Bills</Link>
      </nav>

      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/bills" element={<Bills />} />
        </Routes>
      </main>
    </div>
  )
}
