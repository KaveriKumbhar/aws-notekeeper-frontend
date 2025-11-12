import Link from 'next/link'

export default async function Home(){
  return (
    <section className="py-8">
      <h1 className="text-3xl font-semibold mb-4">Welcome to MyShop</h1>
      <p className="mb-6">A tiny Next.js + Express starter. Check products below.</p>
      <Link href="/products" className="inline-block px-4 py-2 bg-blue-600 text-white rounded">View Products</Link>
    </section>
  )
}
