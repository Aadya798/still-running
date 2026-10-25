"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ArrowLeft, RefreshCw, Activity } from 'lucide-react'

export default function Dashboard() {
  const [logs, setLogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isSyncing, setIsSyncing] = useState(false)

  const fetchLogs = () => {
    fetch('/api/logs')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const formattedData = data.map((log: any) => ({
            day: new Date(log.date).toLocaleDateString('en-US', { weekday: 'short' }),
            mood: log.mood,
            distance: log.distance
          })).reverse();
          setLogs(formattedData)
        }
        setLoading(false)
      })
  }

  useEffect(() => { fetchLogs() }, [])

  const totalDistance = logs.reduce((acc, curr) => acc + (curr.distance || 0), 0)
  const avgMood = logs.length > 0 ? (logs.reduce((acc, curr) => acc + (curr.mood || 0), 0) / logs.length).toFixed(1) : 0

  const handleStravaSync = async () => {
    setIsSyncing(true)
    setTimeout(async () => {
      const fakeStravaRun = {
        mood: Math.floor(Math.random() * 5) + 5,
        distance: Number((Math.random() * 8 + 2).toFixed(1)),
        note: "Imported automatically from Strava"
      };
      await fetch('/api/logs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fakeStravaRun)
      });
      alert('Strava activity synced!');
      fetchLogs();
      setIsSyncing(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 relative">
      
      <Link href="/" className="absolute top-8 left-8 text-gray-500 hover:text-white flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-colors">
        <ArrowLeft className="w-4 h-4" /> Home
      </Link>

      <div className="max-w-6xl mx-auto pt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Progress.</h1>
          
          <div className="flex gap-4">
            <button onClick={handleStravaSync} disabled={isSyncing} className="bg-white/10 text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white/20 transition-all flex items-center gap-2">
              <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} /> 
              {isSyncing ? 'Syncing' : 'Sync Strava'}
            </button>
            <Link href="/log" className="bg-white text-black px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-all">
              New Log
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="border border-white/10 p-8 rounded-2xl bg-white/5">
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">Total Distance</p>
            <div className="text-5xl md:text-7xl font-black tracking-tighter">{totalDistance.toFixed(1)}<span className="text-2xl text-gray-500 ml-2">km</span></div>
          </div>
          <div className="border border-white/10 p-8 rounded-2xl bg-white/5">
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">Average Mood</p>
            <div className="text-5xl md:text-7xl font-black tracking-tighter">{avgMood}<span className="text-2xl text-gray-500 ml-2">/ 10</span></div>
          </div>
          <div className="border border-white/10 p-8 rounded-2xl bg-white text-black">
            <p className="text-xs font-bold tracking-widest text-gray-600 uppercase mb-4">Next Run Club</p>
            <div className="text-3xl font-black tracking-tighter">City Park</div>
            <p className="text-sm font-medium mt-2">Tomorrow, 7 AM</p>
          </div>
        </div>

        {/* Chart */}
        <div className="border border-white/10 rounded-2xl bg-[#0a0a0a] p-8">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">Mood vs Distance</p>
          <div className="h-[400px]">
            {loading ? (
              <div className="h-full flex items-center justify-center text-gray-500">Loading Data...</div>
            ) : logs.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-500">
                <Activity className="w-12 h-12 mb-4 opacity-50" />
                No data yet.
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={logs}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                  <XAxis dataKey="day" stroke="#555" tickLine={false} axisLine={false} />
                  <YAxis yAxisId="left" stroke="#555" tickLine={false} axisLine={false} />
                  <YAxis yAxisId="right" orientation="right" stroke="#555" tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff', borderRadius: '8px' }} />
                  <Line yAxisId="left" type="monotone" dataKey="mood" stroke="#ffffff" strokeWidth={4} dot={{r: 4, fill: "#fff"}} activeDot={{r: 8}} />
                  <Line yAxisId="right" type="monotone" dataKey="distance" stroke="#555" strokeWidth={4} dot={{r: 4, fill: "#555"}} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}