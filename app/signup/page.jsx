'use client'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function Signup(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [msg,setMsg] = useState('')
  const router = useRouter()

  const API = process.env.NEXT_PUBLIC_API_URL ?? ''

  const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${API}/api/auth/register`, {
        email, password
      })
      // store token and redirect
      localStorage.setItem('token', res.data.token)
      router.push('/')
    } catch (err) {
      setMsg(err.response?.data?.message || 'Signup failed')
    }
  }

  return (
    <div className="max-w-md mx-auto py-8">
      <h2 className="text-xl font-semibold mb-4">Create account</h2>
      <form onSubmit={submit} className="space-y-3 bg-white p-4 rounded shadow">
        <input className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full p-2 border rounded" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Signup</button>
        {msg && <p className="text-red-600">{msg}</p>}
      </form>
    </div>
  )
}
