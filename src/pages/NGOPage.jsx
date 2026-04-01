import React, { useState, useEffect } from 'react';
import Tag from "../components/ui/Tag";
import LiveDot from "../components/ui/LiveDot";
import { Link } from "react-router-dom";
import { 
  BellRing, PackageCheck, Truck, ShieldCheck, CheckSquare, 
  Settings, HandPlatter, PauseCircle, Smartphone, Zap, 
  Rocket, Clock, MapPin 
} from "lucide-react";

const LIVE_REQUESTS = [
  { food: "60 Meals Available", dist: "2.8 km away", eta: "Pickup in 15 min", safe: "Safe for 2h", icon: "🍛", key: "r1" },
  { food: "120 kg Fresh Produce", dist: "1.5 km away", eta: "Pickup in 10 min", safe: "Safe for 5h", icon: "🥗", key: "r2" },
  { food: "45 Portions Biryani", dist: "4.2 km away", eta: "Pickup in 20 min", safe: "Safe for 1.5h", icon: "🥘", key: "r3" },
  { food: "80 Bread Packets", dist: "3.5 km away", eta: "Pickup in 12 min", safe: "Safe for 24h", icon: "🍞", key: "r4" },
];

export default function NGOPage() {
  const [reqIdx, setReqIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setReqIdx(prev => (prev + 1) % LIVE_REQUESTS.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const req = LIVE_REQUESTS[reqIdx];

  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-16 pb-32 relative z-10 flex flex-col gap-28">
      
      {/* SECTION 1 — HERO + LIVE PREVIEW */}
      <section className="grid lg:grid-cols-[1fr_500px] gap-16 lg:gap-8 items-center border-b border-border pb-20">
        
        {/* LEFT FOCUS AREA */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex justify-center md:justify-start gap-2 mb-6">
            <Tag label="LIVE PLATFORM" color="#10b981" />
          </div>
          <h1 className="font-serif text-[clamp(44px,6vw,76px)] leading-[1] text-textMain tracking-[-2px] mb-8">
            Log in. Match.<br/> Move food.
          </h1>
          <p className="font-sans text-[20px] md:text-[22px] text-textMuted font-medium mb-12 max-w-md leading-relaxed">
            The simplest tool for NGOs to instantly catch and rescue surplus from nearby donors.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link to="/join" className="bg-textMain hover:bg-black transition-all flex items-center justify-center gap-2 text-white font-sans text-[16px] font-bold px-10 py-5 rounded-2xl shadow-xl shadow-slate-300 transform hover:-translate-y-1">
              Join FoodBridge
            </Link>
            <Link to="/login" className="bg-white hover:bg-slate-50 border-2 border-slate-200 transition-all flex items-center justify-center gap-2 text-textMain font-sans text-[16px] font-bold px-10 py-5 rounded-2xl shadow-sm hover:-translate-y-1">
              NGO Login
            </Link>
          </div>
        </div>

        {/* RIGHT LIVE PREVIEW (THE WEAPON 🔥) */}
        <div className="relative w-full aspect-square flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-orange-500/20 rounded-full blur-[80px] pointer-events-none animate-pulse" />
          
          <div key={req.key} className="relative z-10 w-full max-w-[420px] bg-white/90 backdrop-blur-2xl border border-emerald-100/60 rounded-[40px] p-8 shadow-2xl animate-fadeUp">
             <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-5">
               <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">Incoming Donation</span>
               <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-[0.2em] uppercase border border-emerald-100 shadow-sm transition-transform hover:scale-105">
                 <LiveDot size="w-2 h-2" /> LIVE
               </div>
             </div>
             
             <div className="flex items-center gap-5 mb-10">
               <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center text-[40px] shadow-sm border border-orange-100 shrink-0">
                 {req.icon}
               </div>
               <div className="font-serif text-[32px] md:text-[36px] text-textMain leading-[1.1] tracking-tight">
                 {req.food}
               </div>
             </div>

             <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3 bg-slate-50 py-4 px-3 rounded-2xl border border-border justify-center">
                   <MapPin className="text-blue-500 shrink-0" size={18}/>
                   <span className="font-sans text-[13px] font-extrabold text-slate-700 leading-none">{req.dist}</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 py-4 px-3 rounded-2xl border border-border justify-center">
                   <Truck className="text-orange-500 shrink-0" size={18}/>
                   <span className="font-sans text-[13px] font-extrabold text-slate-700 leading-none">{req.eta}</span>
                </div>
                <div className="col-span-2 flex items-center justify-center gap-3 bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100">
                   <Clock className="text-emerald-500 shrink-0" size={18}/>
                   <span className="font-sans text-[14px] font-extrabold text-emerald-800 uppercase tracking-wide">{req.safe}</span>
                </div>
             </div>

             <div className="flex gap-4">
               <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-sans text-[15px] font-bold py-5 rounded-2xl shadow-lg shadow-emerald-500/30 transition-all hover:-translate-y-1">
                 Accept
               </button>
               <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-500 font-sans text-[15px] font-bold py-5 rounded-2xl transition-colors">
                 Ignore
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT YOU GET */}
      <section className="flex items-stretch gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x px-2">
        {[
          { icon: <BellRing className="text-orange-500" size={26}/>, t: "Instant alerts" },
          { icon: <PackageCheck className="text-blue-500" size={26}/>, t: "Ready-to-accept donations" },
          { icon: <Truck className="text-emerald-500" size={26}/>, t: "Pickup instructions" },
          { icon: <ShieldCheck className="text-purple-500" size={26}/>, t: "Expiry-aware filtering" }
        ].map((card, i) => (
          <div key={i} className="snap-center shrink-0 w-[280px] bg-white/70 backdrop-blur-xl border border-slate-200 rounded-[32px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all cursor-pointer flex flex-col justify-center">
            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-6">{card.icon}</div>
            <div className="font-sans text-[18px] font-bold text-textMain leading-snug">{card.t}</div>
          </div>
        ))}
      </section>

      {/* SECTION 3 — CONTROL PANEL GRID */}
      <section className="bg-white/50 border border-slate-200/50 backdrop-blur-2xl rounded-[48px] p-12 md:p-20 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
        <div className="font-sans text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-4 text-center">Your Setup</div>
        <h2 className="font-serif text-[clamp(40px,5vw,56px)] text-textMain mb-16 text-center tracking-tight leading-[1]">NGO Control Panel</h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto relative z-10">
          {[
            { icon: <CheckSquare size={24}/>, t: "Accept what you need", c: "text-blue-500" },
            { icon: <Settings size={24}/>, t: "Set capacity limits", c: "text-slate-600" },
            { icon: <HandPlatter size={24}/>, t: "Choose food types", c: "text-orange-500" },
            { icon: <PauseCircle size={24}/>, t: "Pause alerts anytime", c: "text-red-500" }
          ].map((c, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-[32px] p-8 md:p-10 flex items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all cursor-pointer">
               <div className={`${c.c} bg-slate-50 p-4 rounded-2xl`}>{c.icon}</div>
               <span className="font-sans text-[18px] font-bold text-textMain">{c.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — REAL-TIME FLOW STEPS */}
      <section className="py-12 relative overflow-hidden">
        <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-primary font-bold mb-4 text-center">Operations</div>
        <h2 className="font-serif text-[clamp(40px,5vw,56px)] leading-[1] text-textMain mb-24 text-center tracking-tight">Full visibility flow</h2>

        <div className="max-w-5xl mx-auto relative px-4 overflow-x-auto pb-10 scrollbar-hide">
          <div className="absolute top-[30%] left-10 right-10 h-[4px] bg-slate-200 -translate-y-1/2 z-0 rounded-full overflow-hidden min-w-[600px]">
             <div className="w-1/3 h-full bg-blue-500 animate-[marquee_4s_linear_infinite]" />
          </div>
          <div className="flex justify-between items-start relative z-10 min-w-[600px]">
            {[ "REQUEST", "ACCEPT", "PICKUP", "EN ROUTE", "DELIVERED" ].map((s, i) => (
               <div key={i} className="flex flex-col items-center gap-5">
                 <div className={`w-8 h-8 rounded-full border-[5px] border-white shadow-md transition-all duration-300 ${i < 3 ? 'bg-blue-500 shadow-blue-500/40 scale-110' : 'bg-slate-300'}`} />
                 <span className={`font-sans text-[13px] font-bold tracking-[0.15em] uppercase ${i < 3 ? 'text-blue-600' : 'text-slate-400'}`}>{s}</span>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — MULTI-NGO NETWORK (STACKED) */}
      <section className="bg-emerald-50/70 backdrop-blur-xl border border-emerald-100 rounded-[48px] p-12 md:p-24 flex flex-col items-center text-center overflow-hidden relative">
        <h2 className="font-serif text-[clamp(44px,5vw,60px)] leading-[1] text-emerald-950 tracking-tight mb-20 relative z-10">An active ecosystem</h2>
        
        <div className="relative w-full max-w-lg h-[300px] z-10">
           {/* Card 3 (Bottom) */}
           <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[70%] bg-white/50 border border-slate-200 rounded-3xl p-6 shadow-sm opacity-60 backdrop-blur-md transform scale-90 flex justify-between">
             <span className="font-sans font-bold text-slate-500 uppercase tracking-widest text-[13px]">Feeding India</span>
             <Tag label="ACCEPTING" color="#a855f7" />
           </div>
           
           {/* Card 2 (Middle) */}
           <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[85%] bg-white/80 border border-slate-200 rounded-3xl p-8 shadow-md opacity-90 backdrop-blur-md transform scale-95 flex justify-between z-10">
             <span className="font-sans font-bold text-slate-600 uppercase tracking-widest text-[14px]">Robin Hood Army</span>
             <Tag label="DELIVERING" color="#f59e0b" />
           </div>
           
           {/* Card 1 (Top) */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full bg-white border border-emerald-100 rounded-[32px] p-8 shadow-[0_10px_40px_rgba(16,185,129,0.15)] z-20 flex justify-between items-center transition-transform hover:-translate-y-2 cursor-pointer animate-[float3_4s_ease-in-out_infinite]">
             <span className="font-sans text-[18px] font-bold text-textMain flex items-center gap-3"><ShieldCheck className="text-emerald-500" size={24}/> Smile Foundation</span>
             <Tag label="ACTIVE" color="#10b981" />
           </div>
        </div>
      </section>

      {/* SECTION 6 — MOBILE-FIRST STRIP */}
      <section className="grid lg:grid-cols-3 gap-6">
        {[
          { icon: <Smartphone size={32}/>, t: "Works perfectly on mobile" },
          { icon: <Zap size={32}/>, t: "One-tap actions" },
          { icon: <Rocket size={32}/>, t: "Fast field usage" }
        ].map((feat, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-[40px] p-12 flex flex-col items-center justify-center text-center shadow-xl group hover:border-emerald-500/50 transition-colors cursor-pointer">
            <div className="text-emerald-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">{feat.icon}</div>
            <div className="font-sans text-[18px] font-bold text-white tracking-wide">{feat.t}</div>
          </div>
        ))}
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section className="relative overflow-hidden rounded-[48px] shadow-2xl bg-textMain p-12 md:p-24 text-center sticky bottom-6 z-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent pointer-events-none" />
        <h2 className="relative z-10 font-serif text-[clamp(44px,6vw,72px)] leading-[1] text-white tracking-[-2px] mb-12">
          Start receiving food today.
        </h2>
        <div className="relative z-10 flex flex-col sm:flex-row gap-5 justify-center">
          <Link to="/join" className="bg-primary hover:bg-emerald-600 transition flex items-center justify-center gap-2 text-white font-sans text-[18px] font-bold px-12 py-5 rounded-2xl shadow-xl shadow-emerald-500/30">
             Join FoodBridge
          </Link>
          <Link to="/login" className="bg-white/10 hover:bg-white/20 transition backdrop-blur-sm border border-white/20 flex items-center justify-center gap-2 text-white font-sans text-[18px] font-bold px-12 py-5 rounded-2xl">
             Login
          </Link>
        </div>
      </section>

    </div>
  );
}
