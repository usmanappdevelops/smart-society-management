import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Visitors from './pages/Visitors'
import Bills from './pages/Bills'
import Complaints from './pages/Complaints'
import Notices from './pages/Notices'

export default function App() {
  const isLoggedIn = !!localStorage.getItem('token')

  return (
    <div>
      <nav style={{ padding: 12, background: '#0b5fff', color: '#fff' }}>
        <Link to="/dashboard" style={{ color: '#fff', marginRight: 12 }}>Dashboard</Link>
        <Link to="/visitors" style={{ color: '#fff', marginRight: 12 }}>Visitors</Link>
        <Link to="/bills" style={{ color: '#fff', marginRight: 12 }}>Bills</Link>
        <Link to="/complaints" style={{ color: '#fff', marginRight: 12 }}>Complaints</Link>
        <Link to="/notices" style={{ color: '#fff' }}>Notices</Link>
      </nav>

      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />} />
          <Route path="/visitors" element={isLoggedIn ? <Visitors /> : <Navigate to="/login" replace />} />
          <Route path="/bills" element={isLoggedIn ? <Bills /> : <Navigate to="/login" replace />} />
          <Route path="/complaints" element={isLoggedIn ? <Complaints /> : <Navigate to="/login" replace />} />
          <Route path="/notices" element={isLoggedIn ? <Notices /> : <Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to={isLoggedIn ? '/dashboard' : '/login'} replace />} />
        </Routes>
      </main>
    </div>
  )
}
