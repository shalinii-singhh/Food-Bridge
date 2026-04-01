import React, { useState } from 'react';
import Tag from "../components/ui/Tag";
import LiveDot from "../components/ui/LiveDot";
import { 
  MapPin, Clock, ArrowRight, CheckCircle2, Navigation, 
  ShieldCheck, Rocket, Package, Search, ThermometerSun
} from "lucide-react";

export default function DonatePage() {
  const [selectedType, setSelectedType] = useState('Cooked Meal');

  const foodTypes = [
    "Cooked Meal", "Rice / Biryani", "Bread / Roti", "Curry / Sabzi", "Dairy / Sweets"
  ];

  return (
    <div className="max-w-[1100px] mx-auto px-6 md:px-12 pt-16 pb-32 relative z-10 flex flex-col gap-16">
      
      {/* SECTION 1 — HERO */}
      <section className="text-center md:text-left border-b border-border pb-12 flex flex-col items-center md:items-start">
        <div className="flex justify-center md:justify-start gap-2 mb-6">
          <Tag label="FAST" color="#10b981" />
          <Tag label="LIVE" color="#3b82f6" />
          <Tag label="VERIFIED" color="#f59e0b" />
        </div>
        <h1 className="font-serif text-[clamp(48px,6vw,80px)] leading-[1] text-textMain tracking-[-2px] mb-6">
          Donate surplus. <br className="hidden md:block" /><span className="text-primary italic">Feed someone.</span>
        </h1>
        <p className="font-sans text-[18px] md:text-[22px] text-textMuted font-medium mb-4 max-w-2xl">
          Turn extra food into real meals — fast, tracked, reliable.
        </p>
      </section>

      <div className="grid lg:grid-cols-[1fr_400px] gap-8 md:gap-10">
        
        {/* SECTION 2 — FOOD INPUT */}
        <section className="bg-white/80 border border-slate-200 backdrop-blur-xl rounded-[40px] p-8 md:p-12 shadow-sm flex flex-col gap-10 transition-all hover:shadow-md">
          <div>
            <div className="font-sans text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-3">Donation Entry</div>
            <h2 className="font-serif text-[36px] md:text-[46px] leading-[1] text-textMain tracking-tight">Add details</h2>
          </div>

          <div className="flex flex-col gap-8">
            
            {/* Food Type */}
            <div>
              <label className="block font-sans text-[13px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-4">Food Type</label>
              <div className="flex flex-wrap gap-3">
                {foodTypes.map(tf => (
                  <button 
                    key={tf}
                    onClick={() => setSelectedType(tf)}
                    className={`px-5 py-3 rounded-2xl font-sans text-[14px] font-bold transition-all border ${selectedType === tf ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:-translate-y-1 my-1'}`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block font-sans text-[13px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-4">Quantity</label>
              <input 
                type="text" 
                placeholder="e.g. 50 meals or 12 kg"
                className="w-full bg-slate-50 border border-slate-200 text-textMain font-sans text-[18px] font-bold px-6 py-5 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:font-medium placeholder:text-slate-400"
              />
            </div>

            {/* Cooked Time */}
            <div>
              <div className="flex flex-wrap justify-between items-end mb-4 gap-2">
                <label className="block font-sans text-[13px] font-bold text-slate-500 uppercase tracking-[0.15em]">Preparation Time</label>
                <span className="font-sans text-[10px] bg-amber-50 text-amber-600 px-3 py-1.5 rounded-lg font-bold uppercase tracking-widest border border-amber-100 flex items-center gap-1.5">
                  <ThermometerSun size={14}/> Freshness Calc
                </span>
              </div>
              <input 
                type="time" 
                defaultValue="14:30"
                className="w-full bg-slate-50 border border-slate-200 text-textMain font-sans text-[18px] font-bold px-6 py-5 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
              />
            </div>

            {/* Pickup Location */}
            <div>
              <div className="flex justify-between items-end mb-4">
                 <label className="block font-sans text-[13px] font-bold text-slate-500 uppercase tracking-[0.15em]">Pickup Location</label>
                 <button className="font-sans text-[13px] text-primary hover:text-emerald-700 font-bold flex items-center gap-1.5 transition-colors">
                   <MapPin size={16} /> Use my location
                 </button>
              </div>
              <input 
                type="text" 
                placeholder="Enter exact address or landmark"
                className="w-full bg-slate-50 border border-slate-200 text-textMain font-sans text-[18px] font-bold px-6 py-5 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:font-medium placeholder:text-slate-400"
              />
            </div>

          </div>
        </section>

        {/* RIGHT COLUMN: PREVIEW + ACTION */}
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* SECTION 3 — SMART MATCH RESULT (AUTO CARD) */}
          <section className="bg-orange-50/80 border border-orange-200/60 backdrop-blur-xl rounded-[40px] p-8 md:p-10 shadow-sm flex flex-col relative overflow-hidden transition-transform hover:-translate-y-1">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-400/20 rounded-full blur-[40px] pointer-events-none" />
            <div className="flex flex-col gap-4 mb-8 relative z-10">
              <div className="font-sans text-[11px] font-bold tracking-[0.2em] text-orange-600 uppercase">System Match</div>
              <h2 className="font-serif text-[36px] md:text-[42px] leading-[1] text-orange-950 tracking-tight">Best match found</h2>
              <div className="flex gap-2">
                <Tag label="MATCHED" color="#f97316" />
                <Tag label="READY" color="#3b82f6" />
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-orange-100 flex flex-col gap-5 mb-8 relative z-10 shadow-sm">
               <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-orange-100 pb-5 gap-2">
                 <span className="font-sans text-[14px] font-bold text-orange-900/60 uppercase tracking-widest">Selected NGO</span>
                 <span className="font-sans text-[16px] font-bold text-orange-800 flex items-center gap-2">Smile Foundation <CheckCircle2 size={18} className="text-emerald-500"/></span>
               </div>
               <div className="flex justify-between items-center">
                 <span className="font-sans text-[15px] font-bold text-orange-900/70 flex items-center gap-3"><MapPin size={18} className="text-orange-400"/> Distance</span>
                 <span className="font-sans text-[16px] font-bold text-orange-950 bg-orange-100 px-3 py-1 rounded-lg">3.2 km</span>
               </div>
               <div className="flex justify-between items-center">
                 <span className="font-sans text-[15px] font-bold text-orange-900/70 flex items-center gap-3"><Clock size={18} className="text-orange-400"/> Pickup ETA</span>
                 <span className="font-sans text-[16px] font-bold text-orange-950 bg-orange-100 px-3 py-1 rounded-lg">18 min</span>
               </div>
               <div className="flex justify-between items-center">
                 <span className="font-sans text-[15px] font-bold text-orange-900/70 flex items-center gap-3"><ShieldCheck size={18} className="text-orange-400"/> Safe Window</span>
                 <span className="font-sans text-[16px] font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-lg">2h 30m</span>
               </div>
            </div>

            <div className="font-sans text-[14px] font-bold text-orange-700 italic text-center relative z-10">
               Optimized for speed + safety + capacity
            </div>
          </section>

          {/* SECTION 4 — ACTION */}
          <section className="bg-textMain text-white rounded-[40px] p-10 text-center shadow-2xl relative overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer group">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent pointer-events-none transition-opacity group-hover:opacity-100 opacity-80" />
             <div className="relative z-10 flex flex-col items-center gap-5">
                <button className="w-full bg-primary group-hover:bg-emerald-500 transition-colors flex items-center justify-center gap-3 text-white font-sans text-[20px] font-bold px-8 py-6 rounded-2xl shadow-xl shadow-emerald-500/30">
                  <Rocket size={26} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/> Confirm Donation
                </button>
                <div className="font-sans text-[14px] font-bold text-white/50 tracking-wider">
                  Takes less than 60 seconds
                </div>
             </div>
          </section>

        </div>
      </div>

      {/* SECTION 5 — LIVE STATUS FLOW */}
      <section className="bg-white/60 border border-slate-200 backdrop-blur-xl rounded-[48px] p-10 md:p-16 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16 relative z-10">
          <div>
            <div className="font-sans text-[11px] font-bold tracking-[0.2em] text-blue-600 uppercase mb-3 text-center md:text-left">Post-Donation</div>
            <h2 className="font-serif text-[40px] md:text-[52px] leading-[1] text-textMain tracking-tight text-center md:text-left">Track in real time</h2>
          </div>
          <div className="flex justify-center flex-wrap gap-2">
             <Tag label="LIVE" color="#10b981" />
             <Tag label="TRACKED" color="#3b82f6" />
             <Tag label="ACTIVE" color="#a855f7" />
          </div>
        </div>

        <div className="flex flex-nowrap items-center justify-between gap-6 relative z-10 overflow-x-auto pb-6 scrollbar-hide px-4">
          <div className="hidden md:block absolute top-[35%] left-10 right-10 h-[3px] bg-slate-200 -translate-y-1/2 z-0 overflow-hidden rounded-full">
            <div className="w-48 h-full bg-blue-400 animate-[marquee_5s_linear_infinite]" />
          </div>
          {[
            { step: "SUBMITTED", active: true },
            { step: "MATCHED", active: false },
            { step: "PICKUP", active: false },
            { step: "EN ROUTE", active: false },
            { step: "DELIVERED", active: false }
          ].map((s, i) => (
             <div key={i} className="relative z-10 flex flex-col items-center min-w-[120px] shrink-0">
               <div className={`w-[80px] h-[80px] rounded-full border-[4px] flex items-center justify-center font-sans font-bold text-[22px] mb-5 transition-all ${s.active ? 'bg-blue-500 border-blue-200 text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-pulse' : 'bg-white border-slate-200 text-slate-400 shadow-sm'}`}>
                 {i + 1}
               </div>
               <span className={`font-sans text-[13px] tracking-[0.15em] font-bold uppercase ${s.active ? 'text-blue-600' : 'text-slate-400'}`}>
                 {s.step}
               </span>
             </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 & 7 — TRUST STRIP & FINAL LINE */}
      <section className="flex flex-col items-center text-center gap-12 border-t border-border pt-20">
        
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 font-sans text-[15px] font-bold text-textMuted bg-white/70 backdrop-blur-md px-10 py-6 rounded-[32px] border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3"><ShieldCheck className="text-emerald-500" size={24}/> Verified NGO network</div>
          <div className="hidden md:block w-2 h-2 rounded-full bg-slate-300" />
          <div className="flex items-center gap-3"><Clock className="text-amber-500" size={24}/> Expiry-aware system</div>
          <div className="hidden md:block w-2 h-2 rounded-full bg-slate-300" />
          <div className="flex items-center gap-3"><Search className="text-blue-500" size={24}/> Full delivery tracking</div>
        </div>

        <div className="font-sans text-[14px] font-bold text-slate-400 uppercase tracking-[0.2em] bg-slate-50 border border-slate-100 px-6 py-2 rounded-full">
           No guesswork. Fully transparent.
        </div>
        
        <h2 className="font-serif text-[clamp(44px,6vw,72px)] leading-[1.1] text-textMain tracking-[-2px] max-w-2xl px-4">
          Every donation feeds <br className="hidden md:block"/>someone today.
        </h2>

      </section>

    </div>
  );
}
