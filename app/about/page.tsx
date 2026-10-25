"use client"
import { motion } from 'framer-motion'
import { Brain, Activity, Heart } from 'lucide-react'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">Our Philosophy</h1>
        <p className="text-2xl text-slate-600 font-light">"Taking care of your body is the first step to taking care of your mind."</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center space-y-4">
          <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"><Activity className="w-8 h-8 text-blue-600" /></div>
          <h3 className="text-xl font-bold">Physical Health</h3>
          <p className="text-slate-600">Tracking distance builds discipline and strength.</p>
        </div>
        <div className="text-center space-y-4">
          <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"><Brain className="w-8 h-8 text-green-600" /></div>
          <h3 className="text-xl font-bold">Mental Clarity</h3>
          <p className="text-slate-600">Logging mood reveals patterns between miles and happiness.</p>
        </div>
        <div className="text-center space-y-4">
          <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"><Heart className="w-8 h-8 text-purple-600" /></div>
          <h3 className="text-xl font-bold">Community</h3>
          <p className="text-slate-600">Finding a run club turns a grind into a shared journey.</p>
        </div>
      </div>
    </div>
  )
}