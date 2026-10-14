import { useEffect, useState } from 'react';
import api from '../api';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    approvedUsers: 0,
    residentUsers: 0,
    adminUsers: 0,
    guardUsers: 0,
  });

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    load();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <StatBox label="Total Users" value={stats.totalUsers} />
        <StatBox label="Approved Users" value={stats.approvedUsers} />
        <StatBox label="Residents" value={stats.residentUsers} />
        <StatBox label="Admins" value={stats.adminUsers} />
        <StatBox label="Guards" value={stats.guardUsers} />
      </div>
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div style={{
      minWidth: '180px',
      background: '#f4f7ff',
      border: '1px solid #dfeaff',
      borderRadius: '10px',
      padding: '18px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
    }}>
      <div style={{ fontSize: '13px', color: '#555' }}>{label}</div>
      <div style={{ fontSize: '32px', fontWeight: '700', marginTop: '8px' }}>{value}</div>
    </div>
  );
}
