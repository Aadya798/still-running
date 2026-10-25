"use client"
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight, Activity, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      
      {/* 1. MINIMALIST NAVBAR */}
      <nav className="absolute top-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center">
        <div className="text-2xl font-black italic tracking-tighter">
          STILL <span className="text-gray-500">RUNNING.</span>
        </div>
        
        <div className="hidden md:flex gap-10 text-xs font-bold tracking-widest text-gray-400">
          <Link href="/dashboard" className="hover:text-white transition-colors">DASHBOARD</Link>
          <Link href="/run-clubs" className="hover:text-white transition-colors">RUN CLUBS</Link>
          <Link href="/about" className="hover:text-white transition-colors">PHILOSOPHY</Link>
        </div>

        <Link href="/log" className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-gray-200 transition-all hover:scale-105">
          JOIN CLUB
        </Link>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Motion Blur Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.jpg" 
            alt="Night running motion" 
            fill 
            className="object-cover opacity-60 scale-105"
            priority
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/80" />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-16">
          <h1 className="text-[15vw] md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-6 uppercase">
            Run <br/> Together.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium max-w-lg mx-auto mb-10 tracking-wide">
            Where your physical miles meet your mental peace. Join the most vibrant running community.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-full font-black tracking-wide hover:scale-105 transition-transform text-sm">
              ENTER DASHBOARD
            </Link>
            <Link href="/log" className="w-full sm:w-auto px-10 py-5 rounded-full font-black tracking-wide border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center text-sm backdrop-blur-sm">
              LOG A RUN <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. BRAND TICKER */}
      <div className="border-y border-white/10 py-8 bg-[#050505] relative z-20">
        <p className="text-center text-[10px] tracking-[0.2em] text-gray-500 mb-8 uppercase font-bold">Powered By The Best</p>
        <div className="flex justify-center gap-12 md:gap-24 opacity-40 grayscale mix-blend-screen">
          <span className="text-3xl font-black italic tracking-tighter">STRAVA</span>
          <span className="text-3xl font-black italic tracking-tighter">NIKE</span>
          <span className="text-3xl font-black italic tracking-tighter">GARMIN</span>
          <span className="text-3xl font-black italic tracking-tighter">WHOOP</span>
        </div>
      </div>

      {/* 4. SPLIT SECTION */}
      <section className="bg-[#050505] py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10 order-2 lg:order-1">
            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-white"></span> Who We Are
              </h2>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                A COMMUNITY<br/>DRIVEN<br/>PLATFORM.
              </h3>
            </div>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md font-light">
              We track your pace, distance, and mental health—turning your raw effort into clean, motivating visuals you'll actually want to look at.
            </p>
            
            <div className="space-y-5 pt-4">
               <div className="flex items-center gap-4 text-sm font-semibold tracking-wide text-gray-300">
                 <Activity className="w-5 h-5 text-white" /> Zone insights & mood trends
               </div>
               <div className="flex items-center gap-4 text-sm font-semibold tracking-wide text-gray-300">
                 <Zap className="w-5 h-5 text-white" /> Coach-ready graphs
               </div>
            </div>

            <div className="pt-6">
              <Link href="/about" className="inline-flex items-center gap-2 text-white font-bold tracking-widest text-sm border-b border-white pb-2 hover:text-gray-400 hover:border-gray-400 transition-colors">
                READ OUR PHILOSOPHY <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Track Blur Image */}
          <div className="relative h-[600px] lg:h-[800px] w-full order-1 lg:order-2">
             <Image 
               src="/track-blur.jpg" 
               alt="Track blur" 
               fill 
               className="object-cover opacity-90"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-50" />
          </div>

        </div>
      </section>

      {/* 5. FULL WIDTH IMAGE BANNER */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/sunset-run.jpg" 
            alt="Sunset running" 
            fill 
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-[#050505]/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
            YOU ARE NOT <br/> RUNNING ALONE.
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Track your miles. Log your mood. Find your tribe.
          </p>
          <Link href="/log" className="bg-white text-black px-10 py-5 rounded-full font-black tracking-wide hover:scale-105 transition-transform text-sm inline-block">
            START TRACKING
          </Link>
        </div>
      </section>

    </main>
  )
}