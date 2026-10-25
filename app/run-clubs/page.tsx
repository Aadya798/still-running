"use client"
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const clubs = [
  { name: "Sunrise Runners", location: "City Park", time: "Mon & Wed, 6:00 AM", distance: "5km", vibe: "Relaxed" },
  { name: "Midnight Milers", location: "Downtown Track", time: "Fri, 9:00 PM", distance: "10km", vibe: "Fast" },
  { name: "Mindful Joggers", location: "River Trail", time: "Sat, 8:00 AM", distance: "3km", vibe: "Mental Health" },
]

export default function RunClubs() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 relative">
      
      <Link href="/" className="absolute top-8 left-8 text-gray-500 hover:text-white flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-colors">
        <ArrowLeft className="w-4 h-4" /> Home
      </Link>

      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-16">Find Your Tribe.</h1>
        
        <div className="space-y-2">
          {clubs.map((club, i) => (
            <Link href="#" key={i} className="group block border-b border-white/10 py-8 hover:bg-white/5 px-4 transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-2 group-hover:text-gray-300 transition-colors">{club.name}</h2>
                  <p className="text-gray-500 text-sm font-medium tracking-widest uppercase">{club.location} • {club.time}</p>
                </div>
                <div className="flex items-center gap-8 mt-4 md:mt-0">
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Vibe</p>
                    <p className="font-semibold">{club.vibe}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Distance</p>
                    <p className="font-semibold">{club.distance}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}