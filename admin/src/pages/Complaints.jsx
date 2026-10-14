import { useEffect, useState } from 'react';
import api from '../api';

export default function Complaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/complaints', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setComplaints(response.data.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    load();
  }, []);

  return (
    <div>
      <h2>Complaints</h2>
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint.id}>
            <strong>{complaint.title}</strong> — {complaint.category} — {complaint.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
