import { useState } from 'react';
import api from '../api';

export default function Notices() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState('Normal');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      await api.post('/notices', { title, content, priority }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Notice published successfully');
      setTitle('');
      setContent('');
      setPriority('Normal');
    } catch (error) {
      alert(error?.response?.data?.message || 'Unable to publish notice');
    }
  };

  return (
    <div>
      <h2>Publish Notice</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <div>
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={5} />
        </div>
        <div>
          <label>Priority</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value="Emergency">Emergency</option>
          </select>
        </div>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}
