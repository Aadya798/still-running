"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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
      
      const data = await res.json();
      
      if (res.ok) {
        alert('Saved to Database!')
        router.push('/dashboard')
      } else {
        alert('Database Error: ' + data.error) // THIS WILL SHOW US THE REAL ERROR
      }
    } catch (err) {
      alert('Network Error: Could not reach backend')
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-lg shadow-lg border-none">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-800 text-center">Log Today's Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Mood Score (1-10)</label>
              <Input type="number" min="1" max="10" value={mood} onChange={(e) => setMood(Number(e.target.value))} className="text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Distance Run (km)</label>
              <Input type="number" placeholder="e.g., 5" value={distance} onChange={(e) => setDistance(e.target.value)} required className="text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">How do you feel?</label>
              <Textarea placeholder="Felt great after the run..." value={note} onChange={(e) => setNote(e.target.value)} rows={4} />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg">
              Save Log
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}