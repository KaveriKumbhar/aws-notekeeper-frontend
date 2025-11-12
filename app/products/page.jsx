import Link from 'next/link'

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

async function fetchProducts(){
  try {
    const res = await fetch(`${API}/api/products`)
    if (!res.ok) {
      // not a successful response, return fallback
      console.error('Products fetch failed:', res.status, res.statusText)
      return { products: [] }
    }
    return await res.json()
  } catch (err) {
    // connection refused or network error
    console.error('Products fetch error:', err)
    return { products: [] }
  }
}

export default async function Products(){
  const data = await fetchProducts()
  const products = data?.products || []

  return (
    <div className="py-6">
      <h2 className="text-2xl font-medium mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map(p => (
          <div key={p._id} className="p-4 bg-white shadow rounded">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-slate-600">{p.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-bold">₹{p.price}</span>
              <Link href={`/products/${p._id}`} className="text-blue-600">View</Link>
            </div>
          </div>
        ))}
        {products.length === 0 && <p>No products available.</p>}
      </div>
    </div>
  )
}
