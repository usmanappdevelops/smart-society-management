import { useState } from 'react';
import api from '../api';

export default function Login() {
  const [email, setEmail] = useState('admin@smartsociety.com');
  const [password, setPassword] = useState('admin123');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful');
      window.location.href = '/dashboard';
    } catch (error) {
      setMessage(error?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={{ maxWidth: '420px', margin: '40px auto' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
