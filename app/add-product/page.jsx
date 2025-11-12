'use client'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function AddProduct(){
  const [title,setTitle]=useState('')
  const [desc,setDesc]=useState('')
  const [price,setPrice]=useState('')
  const [msg,setMsg]=useState('')
  const router = useRouter()

  const submit = async (e)=>{
    e.preventDefault()
    const token = localStorage.getItem('token')
    try{
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/products`, { title, description: desc, price }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setMsg('Product added')
      router.push('/products')
    } catch(err){
      setMsg(err.response?.data?.message || 'Error')
    }
  }

  return (
    <div className="max-w-md mx-auto py-8">
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>
      <form className="space-y-3 bg-white p-4 rounded shadow" onSubmit={submit}>
        <input className="w-full p-2 border rounded" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <textarea className="w-full p-2 border rounded" placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)} />
        <input className="w-full p-2 border rounded" placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)} />
        <button className="px-4 py-2 bg-green-600 text-white rounded">Add</button>
        {msg && <p className="text-sm">{msg}</p>}
      </form>
    </div>
  )
}
