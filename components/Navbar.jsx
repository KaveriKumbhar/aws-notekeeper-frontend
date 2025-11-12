'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const path = usePathname()
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="font-bold text-lg">MyShop</Link>
                <div className="flex gap-4">
                    <Link href="/" className={path === '/' ? 'underline' : ''}>Home</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/add-product">Add</Link>
                    <Link href="/login" className="px-3 py-1 border rounded">Login</Link>
                    <Link href="/signup" className="px-3 py-1 border rounded">Signup</Link>

                </div>
            </div>
        </nav>
    )
}
