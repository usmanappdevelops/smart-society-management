import { useEffect, useState } from 'react';
import api from '../api';

export default function Bills() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/bills', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBills(response.data.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    load();
  }, []);

  return (
    <div>
      <h2>Bills</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Apartment</th>
            <th>Month</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.apartmentNumber}</td>
              <td>{bill.month}</td>
              <td>{bill.amount}</td>
              <td>{bill.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
