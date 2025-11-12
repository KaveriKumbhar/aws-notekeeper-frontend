import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'MyShop - Next + Express',
  description: 'Simple Next.js + Express starter',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-800">
        <Navbar />
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
