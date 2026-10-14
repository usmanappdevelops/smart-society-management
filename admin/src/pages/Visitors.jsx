import { useEffect, useState } from 'react';
import api from '../api';

export default function Visitors() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/visitors', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setVisitors(response.data.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    load();
  }, []);

  return (
    <div>
      <h2>Visitors</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Purpose</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor) => (
            <tr key={visitor.id}>
              <td>{visitor.visitorName}</td>
              <td>{visitor.visitorPhone}</td>
              <td>{visitor.purpose}</td>
              <td>{visitor.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
