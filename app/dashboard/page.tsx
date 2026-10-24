"use client"
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function Dashboard() {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    fetch('/api/logs')
      .then(res => res.json())
      .then(data => {
        const formattedData = data.map((log: any) => ({
          day: new Date(log.date).toLocaleDateString('en-US', { weekday: 'short' }),
          mood: log.mood,
          distance: log.distance
        })).reverse();
        setLogs(formattedData)
      })
  }, [])

  const totalDistance = logs.reduce((acc: number, curr: any) => acc + curr.distance, 0)
  const avgMood = logs.length > 0 ? (logs.reduce((acc: number, curr: any) => acc + curr.mood, 0) / logs.length).toFixed(1) : 0

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-slate-900">Your Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-sm border-none">
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-slate-500">Total Distance</CardTitle></CardHeader>
            <CardContent><div className="text-4xl font-bold text-blue-600">{totalDistance} km</div></CardContent>
          </Card>
          <Card className="shadow-sm border-none">
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-slate-500">Average Mood</CardTitle></CardHeader>
            <CardContent><div className="text-4xl font-bold text-green-600">{avgMood} / 10</div></CardContent>
          </Card>
          <Card className="shadow-sm border-none">
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-slate-500">Next Run Club</CardTitle></CardHeader>
            <CardContent>
              <div className="text-xl font-bold text-slate-800">City Park Run</div>
              <p className="text-sm text-slate-500">Tomorrow, 7:00 AM</p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-sm border-none">
          <CardHeader><CardTitle className="text-slate-800">Mood vs Running Distance</CardTitle></CardHeader>
          <CardContent className="h-[400px]">
            {logs.length === 0 ? (
              <div className="flex h-full items-center justify-center text-slate-400">
                No data yet. Go log a run!
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={logs}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="day" stroke="#64748b" />
                  <YAxis yAxisId="left" stroke="#64748b" />
                  <YAxis yAxisId="right" orientation="right" stroke="#64748b" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="mood" stroke="#10b981" strokeWidth={3} name="Mood Score" />
                  <Line yAxisId="right" type="monotone" dataKey="distance" stroke="#3b82f6" strokeWidth={3} name="Distance (km)" />
                </LineChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}