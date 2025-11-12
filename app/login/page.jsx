'use client'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function Login(){
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const [err,setErr]=useState('')
  const router = useRouter()

  const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/auth/login`, { email, password: pass })
      // store token locally (simple)
      localStorage.setItem('token', res.data.token)
      router.push('/')
    } catch (e) {
      setErr(e.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className="max-w-md mx-auto py-8">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-3 bg-white p-4 rounded shadow">
        <input className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full p-2 border rounded" placeholder="Password" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
        </div>
        {err && <p className="text-red-600">{err}</p>}
      </form>
    </div>
  )
}
