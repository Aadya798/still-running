"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'
import { Activity, Brain, Calendar, Plus, TrendingUp, Home, RefreshCw } from 'lucide-react'

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

  useEffect(() => {
    fetchLogs()
  }, [])

  const totalDistance = logs.reduce((acc, curr) => acc + (curr.distance || 0), 0)
  const avgMood = logs.length > 0 ? (logs.reduce((acc, curr) => acc + (curr.mood || 0), 0) / logs.length).toFixed(1) : 0

  const handleStravaSync = async () => {
    setIsSyncing(true)
    // Simulate fetching from Strava API
    setTimeout(async () => {
      const randomDistance = (Math.random() * 8 + 2).toFixed(1); // Random distance between 2km and 10km
      const fakeStravaRun = {
        mood: Math.floor(Math.random() * 5) + 5, // Random mood between 5 and 9
        distance: Number(randomDistance),
        note: "Imported automatically from Strava"
      };

      const res = await fetch('/api/logs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fakeStravaRun)
      });

      if (res.ok) {
        alert('Strava activity synced successfully!');
        fetchLogs(); // Refresh data without reloading page
      }
      setIsSyncing(false)
    }, 1500)
  }

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      
      {/* SIDEBAR */}
      <div className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Still <span className="text-blue-600">Running</span></h2>
        <nav className="space-y-4 flex-1">
          <Link href="/dashboard" className="flex items-center gap-3 text-blue-600 font-medium bg-blue-50 p-3 rounded-lg">
            <Home className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/log" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 p-3 rounded-lg transition-colors">
            <Plus className="w-5 h-5" /> Log a Run
          </Link>
          <Link href="/run-clubs" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 p-3 rounded-lg transition-colors">
            <Calendar className="w-5 h-5" /> Run Clubs
          </Link>
        </nav>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8 md:p-12">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* HEADER */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
          >
            <div>
              <h1 className="text-4xl font-extrabold text-slate-900">Welcome Back.</h1>
              <p className="text-slate-500 mt-2">Here is your progress overview.</p>
            </div>
            <div className="flex gap-3">
              <Button 
                onClick={handleStravaSync}
                disabled={isSyncing}
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-200 transition-all"
              >
                <RefreshCw className={`mr-2 h-4 w-4 ${isSyncing ? 'animate-spin' : ''}`} /> 
                {isSyncing ? 'Syncing...' : 'Connect Strava'}
              </Button>
              <Link href="/log">
                <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200">
                  <Plus className="mr-2 h-4 w-4" /> New Log
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* STATS CARDS */}
          <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={item} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="shadow-lg border-none bg-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Activity className="w-24 h-24 text-blue-600" /></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-500" /> Total Distance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-black text-slate-900">{totalDistance.toFixed(1)} <span className="text-2xl text-slate-400 font-medium">km</span></div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="shadow-lg border-none bg-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Brain className="w-24 h-24 text-green-600" /></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" /> Average Mood
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-black text-slate-900">{avgMood} <span className="text-2xl text-slate-400 font-medium">/ 10</span></div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="shadow-lg border-none bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Calendar className="w-24 h-24 text-white" /></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-400">Next Run Club</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white mb-1">City Park Run</div>
                  <p className="text-sm text-slate-400">Tomorrow, 7:00 AM</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* CHART */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="shadow-xl border-none bg-white">
              <CardHeader className="border-b border-slate-100 pb-4">
                <CardTitle className="text-xl font-bold text-slate-800">Mood vs Distance</CardTitle>
              </CardHeader>
              <CardContent className="h-[450px] pt-6">
                {loading ? (
                  <div className="flex h-full items-center justify-center text-slate-400 animate-pulse">Loading your data...</div>
                ) : logs.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-slate-400 space-y-4">
                    <Activity className="w-12 h-12 text-slate-300" />
                    <p>No data yet. Log a run to see your insights!</p>
                    <Link href="/log"><Button variant="outline">Log your first run</Button></Link>
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={logs} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                      <XAxis dataKey="day" stroke="#94a3b8" tickLine={false} axisLine={false} />
                      <YAxis yAxisId="left" stroke="#94a3b8" tickLine={false} axisLine={false} />
                      <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" tickLine={false} axisLine={false} />
                      <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                      <Line yAxisId="left" type="monotone" dataKey="mood" stroke="#10b981" strokeWidth={4} dot={{r: 6, fill: "#10b981", strokeWidth: 2, stroke: "#fff"}} activeDot={{r: 8}} name="Mood Score" />
                      <Line yAxisId="right" type="monotone" dataKey="distance" stroke="#3b82f6" strokeWidth={4} dot={{r: 6, fill: "#3b82f6", strokeWidth: 2, stroke: "#fff"}} activeDot={{r: 8}} name="Distance (km)" />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  )
}