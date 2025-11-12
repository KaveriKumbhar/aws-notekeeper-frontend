// frontend/app/products/[id]/page.jsx
import { notFound } from 'next/navigation'

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

async function getProduct(id){
  const res = await fetch(`${API}/api/products/${id}`)
  if (!res.ok) return null
  return res.json()
}

export default async function ProductPage({ params }) {
  // params may be a Promise — unwrap it first
  const { id } = await params

  const data = await getProduct(id)
  if (!data?.product) return notFound()

  const p = data.product
  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold">{p.title}</h1>
      <p className="mt-2 text-slate-700">{p.description}</p>
      <p className="mt-4 font-bold">Price: ₹{p.price}</p>
    </div>
  )
}
