"use client"
import { motion } from 'framer-motion'
import { Brain, Activity, Heart } from 'lucide-react'
import { signIn } from 'next-auth/react' // Added for Strava

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      {/* 
        This div creates the Top Navigation bar for the Strava Button 
        It sits at the top right of the page
      */}
      <div className="absolute top-0 right-0 w-full p-6 flex justify-between items-center z-10">
        <span className="font-bold text-xl tracking-tighter text-white">Still Running</span>
        
        <button 
          onClick={() => signIn("strava", { callbackUrl: "/dashboard" })}
          className="bg-[#FC4C02] hover:bg-[#E34402] text-white font-semibold px-6 py-2 rounded-full transition-all shadow-[0_0_20px_rgba(252,76,2,0.4)] hover:shadow-[0_0_30px_rgba(252,76,2,0.6)] cursor-pointer"
        >
          Connect Strava
        </button>
      </div>

      {/* Your original layout container, pushed down slightly to avoid the nav bar */}
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-20 relative z-10">
        
        {/* Header Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-6">
          {/* Changed text-slate-900 to text-white */}
          <h1 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-md">Our Philosophy</h1>
          {/* Changed text-slate-600 to text-gray-300 */}
          <p className="text-2xl text-gray-300 font-light">"Taking care of your body is the first step to taking care of your mind."</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Feature 1 */}
          <div className="text-center space-y-4 group">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-300">
              <Activity className="w-8 h-8 text-blue-600" />
            </div>
            {/* Changed to text-white */}
            <h3 className="text-xl font-bold text-white">Physical Health</h3>
            {/* Changed text-slate-600 to text-gray-400 */}
            <p className="text-gray-400">Tracking distance builds discipline and strength.</p>
          </div>

          {/* Feature 2 */}
          <div className="text-center space-y-4 group">
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(34,197,94,0.3)] group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-white">Mental Clarity</h3>
            <p className="text-gray-400">Logging mood reveals patterns between miles and happiness.</p>
          </div>

          {/* Feature 3 */}
          <div className="text-center space-y-4 group">
            <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-white">Community</h3>
            <p className="text-gray-400">Finding a run club turns a grind into a shared journey.</p>
          </div>

        </div>
      </div>
    </div>
  )
}