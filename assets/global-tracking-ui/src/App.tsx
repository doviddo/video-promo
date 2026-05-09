/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Battery,
  Wifi,
  Signal,
  Camera,
  MessageCircle,
  Phone,
  Mail,
  Search,
  Settings,
  Calendar,
  Clock,
  Music,
  Map as MapIcon,
  Sun,
  LayoutGrid,
  ChevronLeft,
  X
} from 'lucide-react';

// --- Components ---

const StatusBar = () => (
  <div className="flex justify-between items-center px-6 py-2 w-full text-white mix-blend-difference z-20">
    <div className="text-sm font-semibold">9:41</div>
    <div className="flex gap-1.5 items-center">
      <Signal size={14} />
      <Wifi size={14} />
      <Battery size={14} className="rotate-0" />
    </div>
  </div>
);

const HomeIndicator = () => (
  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-20" />
);

const AppIcon = ({ icon: Icon, color, label, onClick }: { icon: any, color: string, label: string, onClick?: () => void }) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="flex flex-col items-center gap-1 group"
  >
    <div className={`${color} w-14 h-14 rounded-[1.2rem] flex items-center justify-center shadow-lg transition-transform group-hover:scale-105`}>
      <Icon className="text-white" size={28} />
    </div>
    <span className="text-[10px] text-white/90 font-medium tracking-tight truncate w-full text-center">
      {label}
    </span>
  </motion.button>
);

const Dock = () => (
  <div className="mx-4 mb-4 p-4 bg-white/20 backdrop-blur-3xl rounded-[2.5rem] flex justify-between items-center z-10 border border-white/10 shadow-2xl">
    <div className="bg-green-500 w-14 h-14 rounded-[1.2rem] flex items-center justify-center shadow-lg"><Phone className="text-white" size={28} /></div>
    <div className="bg-blue-500 w-14 h-14 rounded-[1.2rem] flex items-center justify-center shadow-lg"><MessageCircle className="text-white" size={28} /></div>
    <div className="bg-sky-400 w-14 h-14 rounded-[1.2rem] flex items-center justify-center shadow-lg"><Mail className="text-white" size={28} /></div>
    <div className="bg-pink-500 w-14 h-14 rounded-[1.2rem] flex items-center justify-center shadow-lg"><Music className="text-white" size={28} /></div>
  </div>
);

const TrackingApp = () => (
  <div className="flex flex-col h-full bg-[#050a14] relative overflow-hidden font-serif">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop"
        className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        alt="Logistics Background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-black" />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center pt-20 px-6 text-center h-full">
      {/* Network Status */}
      <div className="flex items-center gap-2 mb-12 self-start ml-4">
        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981] animate-pulse" />
        <span className="text-[10px] font-sans font-bold text-white/70 tracking-[0.2em] uppercase">
          Network Status:
        </span>
      </div>

      {/* Main Title */}
      <div className="mb-6">
        <h2 className="text-3xl font-black text-white leading-tight tracking-tight uppercase">
          Predictive
        </h2>
        <h2 className="text-[2.6rem] font-black text-orange-500 leading-none tracking-tight uppercase -mt-1">
          Global
        </h2>
        <h2 className="text-3xl font-black text-white leading-tight tracking-tight uppercase -mt-1">
          Tracking Systems
        </h2>
      </div>

      {/* Description */}
      <p className="font-sans text-[11px] leading-relaxed text-zinc-300 max-w-[240px] mb-12 opacity-80 italic">
        Utilizing high-fidelity data nodes and autonomous monitoring to ensure total transparency for premium logistics networks.
      </p>

      {/* Input Field */}
      <div className="w-full mb-4 group">
        <div className="relative">
          <input 
            type="text" 
            placeholder="INPUT ID // TID-XXXX-XXXX"
            className="w-full bg-blue-950/20 backdrop-blur-md border border-white/10 rounded-lg py-4 px-6 text-[10px] font-mono text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 transition-colors uppercase tracking-widest"
          />
          <div className="absolute bottom-2 left-3 opacity-40">
            <span className="text-[8px] text-white/50 font-mono">_</span>
          </div>
        </div>
      </div>

      {/* Track Button */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        className="w-full bg-orange-600 hover:bg-orange-500 text-white font-sans font-black text-xs py-5 rounded-xl shadow-[0_8px_30px_rgb(234,88,12,0.3)] flex items-center justify-center gap-3 tracking-[0.2em] uppercase transition-all mb-auto"
      >
        <span>⚡</span>
        Track Now
      </motion.button>

      {/* Footer Logo/Mark */}
      <div className="mt-auto mb-10 self-start ml-2 opacity-50">
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">N</span>
        </div>
      </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [isLocked, setIsLocked] = useState(true);
  const [activeApp, setActiveApp] = useState<string | null>(null);

  const apps = [
    { icon: Calendar, color: 'bg-white !text-red-500', label: 'Calendar' }, // Special case for calendar
    { icon: Clock, color: 'bg-black', label: 'Clock' },
    { icon: MapIcon, color: 'bg-emerald-500', label: 'Maps' },
    { icon: Sun, color: 'bg-amber-400', label: 'Weather' },
    { icon: Camera, color: 'bg-zinc-700', label: 'Camera' },
    { icon: Settings, color: 'bg-zinc-500', label: 'Settings' },
    { icon: Search, color: 'bg-blue-600', label: 'Browser' },
    { icon: LayoutGrid, color: 'bg-gradient-to-br from-indigo-500 to-purple-600', label: 'Apps' },
  ];

  const handleUnlock = () => setIsLocked(false);
  const handleLock = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLocked(true);
    setActiveApp(null);
  };

  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center p-4 antialiased selection:bg-white/20">
      {/* Phone Frame */}
      <div className="relative w-[320px] h-[680px] sm:w-[380px] sm:h-[780px] bg-black rounded-[4rem] p-3 shadow-[0_0_80px_rgba(0,0,0,0.8)] border-[6px] border-[#222] overflow-hidden group">
        
        {/* Dynamic Island / Center sensor area */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 transition-all duration-300 group-hover:w-32 group-hover:h-7 shadow-inner" />

        {/* Mute Switch Side Button (Decorative) */}
        <div className="absolute top-24 -left-1 w-1 h-8 bg-[#333] rounded-r-lg z-0" />
        {/* Volume Buttons (Decorative) */}
        <div className="absolute top-40 -left-1 w-1 h-14 bg-[#333] rounded-r-lg z-0" />
        <div className="absolute top-60 -left-1 w-1 h-14 bg-[#333] rounded-r-lg z-0" />
        {/* Power Button (Functional-ish) */}
        <button 
          onClick={handleLock}
          className="absolute top-48 -right-1 w-1 h-20 bg-[#333] rounded-l-lg z-50 hover:bg-[#444] transition-colors" 
        />

        {/* Screen Container */}
        <div className="relative w-full h-full bg-zinc-900 rounded-[3.2rem] overflow-hidden">
          
          {/* Background Wallpaper */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
              className={`w-full h-full object-cover transition-transform duration-1000 ${isLocked ? 'scale-110 blur-md' : 'scale-100 blur-0'}`}
              alt="Wallpaper"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <StatusBar />

          {/* Logic for Different States */}
          <AnimatePresence mode="wait">
            {isLocked ? (
              <motion.div
                key="lockscreen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onClick={handleUnlock}
                className="absolute inset-0 z-20 flex flex-col items-center pt-24 cursor-pointer"
              >
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-1 mb-2 text-white/60 text-xs font-semibold tracking-widest uppercase">
                    Locked
                  </div>
                  <h1 className="text-7xl font-thin text-white tracking-tight mb-2">9:41</h1>
                  <p className="text-white/80 font-medium">Saturday, May 9</p>
                </motion.div>

                <div className="mt-auto mb-16 flex flex-col items-center gap-4">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-white/40 text-xs tracking-wider"
                  >
                    Swipe up to unlock
                  </motion.div>
                  <div className="flex gap-16">
                     <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white"><Camera size={20} /></div>
                     <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white"><Sun size={20} /></div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="homescreen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-10"
              >
                <TrackingApp />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active App Overlay */}
          <AnimatePresence>
            {activeApp && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 100 }}
                className="absolute inset-0 z-40 bg-zinc-950 flex flex-col"
              >
                <div className="pt-12 px-6 flex justify-between items-center">
                  <button onClick={() => setActiveApp(null)} className="text-blue-500 flex items-center gap-1">
                    <ChevronLeft size={20} />
                    <span>Home</span>
                  </button>
                  <h2 className="text-white font-semibold">{activeApp}</h2>
                  <div className="w-8" />
                </div>
                
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center mb-6">
                    <Search className="text-zinc-500" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Welcome to {activeApp}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    This is a concept interface for the {activeApp} application.
                  </p>
                  
                  <button 
                    onClick={() => setActiveApp(null)}
                    className="mt-12 bg-white text-black px-8 py-3 rounded-2xl font-bold text-sm tracking-wide"
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <HomeIndicator />
        </div>
      </div>
      
      {/* Background Info */}
      <div className="absolute top-8 left-8 hidden lg:block">
        <h1 className="text-white text-4xl font-bold mb-2">iOS Interface</h1>
        <p className="text-white/40 max-w-xs">A high-fidelity interactive prototype demonstrating modern mobile UI patterns and glassmorphism.</p>
        <div className="mt-8 flex gap-4">
           <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Status</div>
              <div className="text-green-500 font-mono text-sm uppercase">Prototype Active</div>
           </div>
           <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Auth</div>
              <div className="text-blue-500 font-mono text-sm uppercase">Simulated</div>
           </div>
        </div>
      </div>
    </div>
  );
}
