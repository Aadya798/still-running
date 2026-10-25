"use client"
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const clubs = [
  { name: "Sunrise Runners", location: "City Park", time: "Mon & Wed, 6:00 AM", distance: "5km", vibe: "Relaxed & Social", color: "bg-blue-100 text-blue-700" },
  { name: "Midnight Milers", location: "Downtown Track", time: "Fri, 9:00 PM", distance: "10km", vibe: "Fast & Focused", color: "bg-purple-100 text-purple-700" },
  { name: "Mindful Joggers", location: "River Side Trail", time: "Sat, 8:00 AM", distance: "3km", vibe: "Mental Health", color: "bg-green-100 text-green-700" },
  { name: "Trail Blazers", location: "Mountain Ridge", time: "Sun, 7:00 AM", distance: "15km", vibe: "Adventure", color: "bg-orange-100 text-orange-700" },
  { name: "Speed Demons", location: "City Stadium", time: "Tue & Thu, 5:30 AM", distance: "8km", vibe: "Competitive", color: "bg-red-100 text-red-700" },
  { name: "Casual Pacers", location: "Local Cafe", time: "Wed, 6:30 PM", distance: "4km", vibe: "Coffee & Chat", color: "bg-amber-100 text-amber-700" },
]

export default function RunClubs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Find Your Tribe</h1>
        <p className="text-lg text-slate-600">Running alone is great. Running with others is better.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }}>
            <Card className="h-full shadow-md border-none hover:shadow-xl transition-shadow bg-white flex flex-col">
              <CardHeader>
                <div className={`w-fit px-3 py-1 rounded-full text-xs font-semibold mb-4 ${club.color}`}>{club.vibe}</div>
                <CardTitle className="text-2xl text-slate-900">{club.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600 flex-1">
                <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-slate-400" /> {club.location}</div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-slate-400" /> {club.time}</div>
                <div className="flex items-center gap-3"><Users className="w-5 h-5 text-slate-400" /> {club.distance} Route</div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">Join Club</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}