import React, { useState } from 'react'
import api from '../api'

export default function Notices() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [priority, setPriority] = useState('Normal')

  const submit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      await api.post('/notices', { title, content, priority }, { headers: { Authorization: `Bearer ${token}` } })
      alert('Notice published successfully')
      setTitle('')
      setContent('')
      setPriority('Normal')
    } catch (err) {
      alert(err?.response?.data?.message || 'Unable to publish notice')
    }
  }

  return (
    <div>
      <h2>Publish Notice</h2>
      <form onSubmit={submit}>
        <label>Title</label>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <label>Content</label>
        <textarea value={content} onChange={e => setContent(e.target.value)} rows={4} />
        <label>Priority</label>
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option>Normal</option>
          <option>Urgent</option>
          <option>Emergency</option>
        </select>
        <button type="submit">Publish Notice</button>
      </form>
    </div>
  )
}
