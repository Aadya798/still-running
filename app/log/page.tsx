"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function LogPage() {
  const [mood, setMood] = useState(5)
  const [note, setNote] = useState('')
  const [distance, setDistance] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/logs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood, distance: Number(distance), note })
      })
      if (res.ok) {
        alert('Saved to Database!')
        router.push('/dashboard')
      } else {
        alert('Database Error')
      }
    } catch (err) {
      alert('Network Error')
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 relative">
      
      <Link href="/" className="absolute top-8 left-8 text-gray-500 hover:text-white flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>

      <div className="w-full max-w-lg">
        <h1 className="text-5xl font-black tracking-tighter uppercase mb-10 text-center">Log Activity</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="space-y-3">
            <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">Distance (km)</label>
            <input 
              type="number" 
              placeholder="0.0" 
              value={distance} 
              onChange={(e) => setDistance(e.target.value)} 
              required 
              className="w-full bg-transparent border-b border-white/20 text-4xl font-black py-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-700"
            />
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold tracking-widest text-gray-400 uppercase flex justify-between">
              <span>Mental State</span>
              <span className="text-white">{mood} / 10</span>
            </label>
            <input 
              type="range" 
              min="1" 
              max="10" 
              value={mood} 
              onChange={(e) => setMood(Number(e.target.value))} 
              className="w-full accent-white" 
            />
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">Notes</label>
            <textarea 
              placeholder="How did it feel?" 
              value={note} 
              onChange={(e) => setNote(e.target.value)} 
              rows={3} 
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-lg focus:outline-none focus:border-white transition-colors placeholder:text-gray-600"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-white text-black py-5 rounded-full font-black tracking-widest uppercase hover:scale-105 transition-transform"
          >
            Save Activity
          </button>
        </form>
      </div>
    </div>
  )
}