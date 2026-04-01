import React, { useState, useEffect } from 'react';
import Tag from "../components/ui/Tag";
import Counter from "../components/ui/Counter";
import { MapPin, Navigation, Zap, Network, ArrowRight, Clock, ShieldCheck, Truck } from "lucide-react";

const CITIES = [
  { id: 'mumbai', name: 'Mumbai', meals: 12400, ngos: 45, time: '18m', live: 312, x: '25%', y: '60%' },
  { id: 'delhi', name: 'New Delhi', meals: 18200, ngos: 62, time: '22m', live: 421, x: '45%', y: '30%' },
  { id: 'bangalore', name: 'Bangalore', meals: 15100, ngos: 54, time: '20m', live: 389, x: '35%', y: '75%' },
  { id: 'pune', name: 'Pune', meals: 8400, ngos: 28, time: '15m', live: 156, x: '28%', y: '65%' },
  { id: 'hyderabad', name: 'Hyderabad', meals: 11200, ngos: 36, time: '19m', live: 204, x: '40%', y: '65%' },
];

export default function CitiesPage() {
  const [actIdx, setActIdx] = useState(0);
  const city = CITIES[actIdx];

  useEffect(() => {
    const t = setInterval(() => {
      setActIdx(prev => (prev + 1) % CITIES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto px-6 md:px-12 pt-16 pb-32 relative z-10 flex flex-col gap-24 overflow-hidden">
      
      {/* SECTION 1 & 4 — HERO + MAP + CITY DETAILS */}
      <section className="grid lg:grid-cols-[1fr_600px] gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Tag label="LIVE" color="#10b981" />
            <Tag label="ACTIVE" color="#3b82f6" />
          </div>
          <h1 className="font-serif text-[clamp(48px,6vw,72px)] leading-[1] text-textMain tracking-[-2px] mb-6">
            14+ Cities Live.
          </h1>
          <p className="font-sans text-[18px] text-textMuted mb-10 max-w-md">
            The network is expanding. We route food through India's densest urban grids in real-time.
          </p>

          <div className="bg-white/80 backdrop-blur-md rounded-[32px] p-8 md:p-10 border border-border shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none" />
            <div className="font-sans text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-6 flex items-center justify-between">
              <span>Selected Region</span>
              <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Stats</span>
            </div>
            
            <h2 className="font-serif text-[40px] text-textMain leading-[1] mb-8 tracking-tight transition-all">{city.name}</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-100 shadow-sm">
                <div className="font-sans text-[28px] font-bold text-emerald-700 tracking-tight"><Counter end={city.meals/1000} suffix="k+" /></div>
                <div className="font-sans text-[12px] uppercase tracking-wider text-emerald-600/80 font-bold mt-1">Meals Rescued</div>
              </div>
              <div className="bg-orange-50/70 p-5 rounded-2xl border border-orange-100 shadow-sm">
                <div className="font-sans text-[28px] font-bold text-orange-700 tracking-tight"><Counter end={city.live} /></div>
                <div className="font-sans text-[12px] uppercase tracking-wider text-orange-600/80 font-bold mt-1">Live Deliveries</div>
              </div>
              <div className="bg-blue-50/70 p-5 rounded-2xl border border-blue-100 shadow-sm">
                <div className="font-sans text-[28px] font-bold text-blue-700 tracking-tight"><Counter end={city.ngos} /></div>
                <div className="font-sans text-[12px] uppercase tracking-wider text-blue-600/80 font-bold mt-1">Active NGOs</div>
              </div>
              <div className="bg-purple-50/70 p-5 rounded-2xl border border-purple-100 shadow-sm">
                <div className="font-sans text-[24px] font-bold text-purple-700 tracking-tight leading-[1] pb-[4px] pt-[4px]">{city.time}</div>
                <div className="font-sans text-[12px] uppercase tracking-wider text-purple-600/80 font-bold mt-1">Avg Pickup Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE MAP */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-900 rounded-[48px] overflow-hidden border-4 border-white shadow-2xl group cursor-crosshair">
           {/* Grid Background */}
           <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, #10b981 1.5px, transparent 1.5px)`, backgroundSize: '30px 30px' }} />
           
           {/* Abstract Map Area / Radar Sweep */}
           <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/10 animate-[spin_8s_linear_infinite]" style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(16, 185, 129, 0.15) 100%)' }} />

           {/* India Outline Blob (abstract representation to avoid static map issue) */}
           <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M40 10 Q60 5 70 20 Q80 40 70 70 Q60 90 40 95 Q20 80 15 50 Q10 20 40 10" fill="none" stroke="#10b981" strokeWidth="0.8" />
           </svg>

           {CITIES.map((c, i) => {
             const isActive = i === actIdx;
             return (
               <div 
                 key={c.id}
                 onClick={() => setActIdx(i)}
                 className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 z-10`}
                 style={{ left: c.x, top: c.y }}
               >
                 <div className={`relative flex items-center justify-center ${isActive ? 'scale-125' : 'scale-100 opacity-60 hover:opacity-100'}`}>
                   {isActive && <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50" style={{ padding: '24px', margin: '-12px' }} />}
                   <div className={`w-4 h-4 rounded-full border-[3px] ${isActive ? 'bg-white border-primary shadow-[0_0_20px_#10b981]' : 'bg-slate-400 border-transparent'} transition-colors duration-300 z-10`} />
                   
                   {isActive && (
                      <div className="absolute top-8 whitespace-nowrap bg-white text-textMain font-sans font-bold text-[13px] px-3 py-1.5 rounded-xl shadow-xl shadow-black/20 pointer-events-none animate-fadeUp z-20">
                        {c.name}
                      </div>
                   )}
                 </div>
               </div>
             );
           })}
        </div>
      </section>

      {/* SECTION 2 — ACTIVE CITIES (CHIPS) */}
      <section>
        <div className="flex items-center gap-3 overflow-x-auto pb-6 scrollbar-hide snap-x">
          {CITIES.map((c, i) => (
             <button 
               key={c.id} 
               onClick={() => setActIdx(i)}
               className={`snap-center shrink-0 px-8 py-4 rounded-2xl font-sans text-[15px] font-bold transition-all shadow-sm border ${i === actIdx ? 'bg-textMain text-white border-textMain shadow-md scale-105' : 'bg-white/80 text-textMuted border-border hover:bg-white hover:border-slate-300'}`}
             >
               {c.name}
             </button>
          ))}
          <div className="shrink-0 px-8 py-4 rounded-2xl font-sans text-[15px] font-bold bg-slate-100/50 text-slate-400 border border-slate-200 border-dashed cursor-not-allowed">
             + 9 More Cities
          </div>
        </div>
      </section>

      {/* SECTION 3 — LIVE ACTIVITY TICKER */}
      <section className="bg-white/60 backdrop-blur-md rounded-[24px] border border-border overflow-hidden relative shadow-sm py-5">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex animate-marquee whitespace-nowrap gap-12 font-sans text-[15px] font-bold text-slate-600 px-4">
          <span className="flex items-center gap-2"><Zap className="text-orange-500" size={18}/> Donation logged in Mumbai</span>
          <span className="flex items-center gap-2"><ShieldCheck className="text-blue-500" size={18}/> NGO verified in Delhi</span>
          <span className="flex items-center gap-2"><Truck className="text-emerald-500" size={18}/> Delivery completed in Bangalore</span>
          <span className="flex items-center gap-2"><Zap className="text-orange-500" size={18}/> 45kg rescued in Pune</span>
          <span className="flex items-center gap-2"><ShieldCheck className="text-blue-500" size={18}/> Match found in Hyderabad</span>
          <span className="flex items-center gap-2"><Zap className="text-orange-500" size={18}/> Donation logged in Mumbai</span>
          <span className="flex items-center gap-2"><ShieldCheck className="text-blue-500" size={18}/> NGO verified in Delhi</span>
          <span className="flex items-center gap-2"><Truck className="text-emerald-500" size={18}/> Delivery completed in Bangalore</span>
        </div>
      </section>

      {/* SECTION 5 — NETWORK MODEL */}
      <section className="bg-white/70 backdrop-blur-xl border border-border shadow-sm rounded-[48px] p-10 md:p-20 flex flex-col items-center overflow-hidden">
        <h2 className="font-serif text-[clamp(44px,5vw,56px)] text-textMain tracking-[-2px] mb-20 text-center">Data in motion</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 w-full justify-between max-w-5xl relative">
          <div className="hidden md:block absolute top-1/2 left-14 right-14 h-[2px] bg-slate-200 -translate-y-1/2 z-0 overflow-hidden">
            <div className="w-40 h-full bg-emerald-400 animate-scan" style={{ animationDirection: 'alternate' }} />
          </div>
          {[
            { tag: "DONOR", icon: <Navigation size={28}/>, c: "text-orange-600", bg: "bg-orange-50 border-orange-200 shadow-orange-100" },
            { tag: "SYSTEM", icon: <Network size={28}/>, c: "text-primary", bg: "bg-emerald-50 border-emerald-200 shadow-emerald-100" },
            { tag: "NGO", icon: <ShieldCheck size={28}/>, c: "text-blue-600", bg: "bg-blue-50 border-blue-200 shadow-blue-100" },
            { tag: "DELIVERY", icon: <Truck size={28}/>, c: "text-purple-600", bg: "bg-purple-50 border-purple-200 shadow-purple-100" },
          ].map((node, i) => (
             <div key={i} className={`relative z-10 w-32 h-32 rounded-[24px] ${node.bg} border-2 flex flex-col items-center justify-center shadow-lg transition-transform hover:-translate-y-2`}>
               <div className={`${node.c} mb-3 filter drop-shadow-sm`}>{node.icon}</div>
               <span className={`font-sans text-[12px] uppercase tracking-widest font-bold ${node.c}`}>{node.tag}</span>
             </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 & 7 — EXPANSION FLOW & UPCOMING CITIES */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* EXPANSION FLOW */}
        <section className="bg-white/70 backdrop-blur-xl border border-border rounded-[48px] p-12 shadow-sm flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-400/20 rounded-full blur-[60px]" />
          <div className="font-sans text-[11px] font-bold tracking-[0.2em] text-orange-500 uppercase mb-4">Launch Strategy</div>
          <h3 className="font-serif text-[40px] leading-[1] text-textMain tracking-[-1px] mb-10">City integration</h3>
          
          <div className="relative pl-8 border-l-[3px] border-orange-200 space-y-10 font-sans text-[16px] font-bold text-slate-700">
             <div className="relative"><div className="absolute -left-[43px] w-4 h-4 bg-orange-500 rounded-full border-[4px] border-white shadow-sm top-1"/> NGOs Onboarded</div>
             <div className="relative"><div className="absolute -left-[43px] w-4 h-4 bg-orange-500 rounded-full border-[4px] border-white shadow-sm top-1"/> Donors Verified</div>
             <div className="relative"><div className="absolute -left-[43px] w-4 h-4 bg-orange-500 rounded-full border-[4px] border-white shadow-sm top-1"/> Match Algorithms Tuned</div>
             <div className="relative text-orange-600"><div className="absolute -left-[43px] w-4 h-4 bg-white rounded-full border-[4px] border-orange-500 shadow-sm top-1 animate-pulse"/> System Goes Live</div>
          </div>
          
          <div className="absolute bottom-12 right-12 bg-textMain text-white font-sans text-[13px] uppercase tracking-wider font-bold px-5 py-3 rounded-xl shadow-lg animate-bounce">
            &lt; 48 hrs to launch
          </div>
        </section>

        {/* UPCOMING CITIES */}
        <section className="bg-white/30 backdrop-blur-sm border border-border border-dashed rounded-[48px] p-12 shadow-sm flex flex-col justify-center">
          <div className="font-sans text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-4 flex items-center gap-2">
            <Clock size={16}/> Future Expansion
          </div>
          <h3 className="font-serif text-[40px] leading-[1] text-textMain tracking-[-1px] mb-10">Coming Soon</h3>
          <div className="grid grid-cols-2 gap-4">
             {[ "Jaipur", "Lucknow", "Indore", "Kochi" ].map((c, i) => (
               <div key={i} className="border border-slate-300 border-dashed rounded-[20px] p-6 text-center font-sans text-[16px] font-bold text-slate-400 bg-white/40 backdrop-blur-md opacity-80 hover:opacity-100 transition-opacity">
                 {c}
               </div>
             ))}
          </div>
        </section>
      </div>

      {/* SECTION 8 — FINAL CTA */}
      <section className="relative overflow-hidden rounded-[48px] shadow-2xl bg-textMain p-12 md:p-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent pointer-events-none" />
        <h2 className="relative z-10 font-serif text-[clamp(48px,6vw,80px)] leading-[1] text-white tracking-[-2px] mb-12">
          Scale impact in your city.
        </h2>
        <div className="relative z-10 flex flex-col sm:flex-row gap-5 justify-center">
          <button className="bg-primary hover:bg-emerald-600 transition flex items-center justify-center gap-3 text-white font-sans text-[16px] font-bold px-12 py-5 rounded-2xl shadow-xl shadow-emerald-500/30">
             Start integration <ArrowRight size={18}/>
          </button>
          <button className="bg-white/10 hover:bg-white/20 transition backdrop-blur-sm border border-white/20 flex items-center justify-center gap-3 text-white font-sans text-[16px] font-bold px-12 py-5 rounded-2xl">
             NGO Partnership
          </button>
        </div>
      </section>

    </div>
  );
}
