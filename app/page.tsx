"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Brain, Users, ArrowRight, Zap, HeartPulse } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 p-6 overflow-hidden">
        
        {/* Animated Background Shapes (Simulating motion) */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-4xl text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Run + Mental Health
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter text-slate-900"
          >
            Still <span className="text-blue-600">Running.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Where your physical miles meet your mental peace. Track, log, and discover your true potential.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <Link href="/dashboard">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-lg px-8 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                Enter Dashboard <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/log">
              <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-7 rounded-full border-slate-300 bg-white/50 backdrop-blur hover:bg-slate-100 transition-all">
                Log Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-bold text-slate-900">Everything you need to thrive.</h2>
          <p className="text-lg text-slate-500">We combine running analytics with mental health tracking.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10 }}
          >
            <Card className="h-full border-none shadow-lg bg-white overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-blue-100 p-3 rounded-xl"><Activity className="text-blue-600 w-6 h-6" /></div>
                <CardTitle className="text-2xl">Track Runs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-lg leading-relaxed">Log your distance, pace, and route. See how your physical efforts translate to mental clarity.</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <Card className="h-full border-none shadow-lg bg-white overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-green-100 p-3 rounded-xl"><Brain className="text-green-600 w-6 h-6" /></div>
                <CardTitle className="text-2xl">Mental Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-lg leading-relaxed">Daily mood tracking and journaling. Discover the hidden patterns between miles and happiness.</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <Card className="h-full border-none shadow-lg bg-white overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-purple-100 p-3 rounded-xl"><Users className="text-purple-600 w-6 h-6" /></div>
                <CardTitle className="text-2xl">Run Clubs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-lg leading-relaxed">Find local communities. Running with others turns a solitary grind into a shared journey.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* STATS / BANNER SECTION */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">The science is simple. <br/><span className="text-blue-400">Movement changes mood.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">We built Still Running to prove it to you. Visualize your progress and let the data motivate you.</p>
            
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-4xl font-extrabold text-white">80%</div>
                <div className="text-sm text-slate-400 mt-1">Report better mood after running</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-white">5km</div>
                <div className="text-sm text-slate-400 mt-1">Average distance to mental clarity</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <HeartPulse className="w-8 h-8 text-red-500" />
              <h3 className="text-2xl font-bold text-white">Live Mood Tracking</h3>
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-700 rounded-full overflow-hidden"><div className="h-full bg-green-500 w-4/5"></div></div>
              <div className="h-4 bg-slate-700 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-3/5"></div></div>
              <div className="h-4 bg-slate-700 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-4/5"></div></div>
            </div>
            <p className="text-slate-400 mt-6 text-sm">Visualize your mental state alongside your physical effort instantly.</p>
          </motion.div>
        </div>
      </section>

    </main>
  )
}