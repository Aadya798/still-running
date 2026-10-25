import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Activity, Code, MessageCircle, Briefcase } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Still Running | Run + Mental Health',
  description: 'Where your physical miles meet your mental peace.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>
        
        {/* GLOBAL NAVBAR */}
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Activity className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold tracking-tight text-slate-900">Still Running</span>
            </Link>
            <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</Link>
              <Link href="/log" className="hover:text-blue-600 transition-colors">Log Run</Link>
              <Link href="/run-clubs" className="hover:text-blue-600 transition-colors">Run Clubs</Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
            </div>
            <Link href="/log" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm">
              Start Tracking
            </Link>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-2 text-white">
                <Activity className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-bold tracking-tight">Still Running</span>
              </Link>
              <p className="text-sm text-slate-400 max-w-sm">
                Where your physical miles meet your mental peace. Track your runs, log your mood, and find your community.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</Link></li>
                <li><Link href="/log" className="hover:text-blue-400 transition-colors">Log a Run</Link></li>
                <li><Link href="/run-clubs" className="hover:text-blue-400 transition-colors">Run Clubs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-blue-400 transition-colors"><MessageCircle className="w-5 h-5" /></a>
                <a href="#" className="hover:text-blue-400 transition-colors"><Code className="w-5 h-5" /></a>
                <a href="#" className="hover:text-blue-400 transition-colors"><Briefcase className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
            © {new Date().getFullYear()} Still Running. Built for runners.
          </div>
        </footer>
      </body>
    </html>
  )
}