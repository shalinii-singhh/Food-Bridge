import React from 'react';
import Counter from "../components/ui/Counter";
import Tag from "../components/ui/Tag";
import LiveDot from "../components/ui/LiveDot";
import { Activity, Clock, Target, TrendingUp, CheckCircle2, Factory, HandHeart, Sparkles } from "lucide-react";

export default function ImpactPage() {
  return (
    <div className="max-w-[1300px] mx-auto px-6 md:px-12 pt-16 pb-32 relative z-10 flex flex-col gap-24">
      
      {/* SECTION 1 — LIVE DASHBOARD */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-border pb-6">
          <div>
             <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-primary font-bold mb-3">Live Dashboard</div>
             <h1 className="font-serif text-[clamp(40px,5vw,60px)] leading-[1] text-textMain tracking-tight">Impact happening now</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Tag label="LIVE" color="#10b981" />
            <Tag label="RUNNING" color="#3b82f6" />
            <Tag label="TRACKED" color="#f59e0b" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { n: 1247, suffix: "+", l: "Meals rescued", c: "text-emerald-600", bg: "bg-emerald-50/70", border: "border-emerald-200/50" },
            { n: 86, suffix: "", l: "Active donations", c: "text-orange-600", bg: "bg-orange-50/70", border: "border-orange-200/50" },
            { n: 24, suffix: "", l: "NGOs engaged", c: "text-blue-600", bg: "bg-blue-50/70", border: "border-blue-200/50" },
            { n: 31, suffix: "", l: "Deliveries live", c: "text-rose-600", bg: "bg-rose-50/70", border: "border-rose-200/50", pulse: true },
          ].map((stat, i) => (
            <div key={i} className={`${stat.bg} ${stat.border} border backdrop-blur-md rounded-[32px] p-6 md:p-8 flex flex-col justify-center relative overflow-hidden shadow-sm transition-transform hover:-translate-y-1`}>
              {stat.pulse && <div className="absolute top-6 right-6"><LiveDot size="w-2.5 h-2.5" /></div>}
              <div className={`font-serif text-[clamp(40px,4vw,60px)] leading-[1] tracking-[-2px] mb-2 ${stat.c}`}>
                <Counter end={stat.n} suffix={stat.suffix} />
              </div>
              <div className="font-sans text-[13px] md:text-[15px] font-bold text-textMain/70 uppercase tracking-wide">{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2 — TODAY SNAPSHOT */}
      <section className="bg-textMain text-white rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary rounded-full blur-[120px] opacity-20 pointer-events-none" />
        <h2 className="font-serif text-[36px] md:text-[48px] mb-12 relative z-10 tracking-tight">Today's outcome</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16 relative z-10">
          {[
            { val: <Counter end={300} suffix="+" />, l: "People fed" },
            { val: "120 kg", l: "Food saved" },
            { val: <Counter end={47} />, l: "Families reached" },
            { val: <Counter end={14} />, l: "Locations covered" },
          ].map((stat, i) => (
            <div key={i} className="border-l-2 border-white/20 pl-6">
              <div className="font-serif text-[clamp(36px,4vw,50px)] text-primaryLight leading-[1] tracking-[-1px] mb-3">{stat.val}</div>
              <div className="font-sans text-[13px] text-white/60 tracking-[0.15em] uppercase font-bold">{stat.l}</div>
            </div>
          ))}
        </div>

        <div className="relative z-10 inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 font-sans text-[15px] text-primaryLight font-bold tracking-wide">
          Every number = someone fed
        </div>
      </section>

      {/* SECTION 3 — SYSTEM PERFORMANCE */}
      <section>
        <div className="flex items-center gap-4 mb-10">
          <Activity className="text-primary" size={36} />
          <h2 className="font-serif text-[36px] md:text-[48px] text-textMain leading-[1] tracking-tight">Speed & efficiency</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
             { val: "<10s", l: "Matching time", c: "bg-white/80 border-slate-200 text-slate-800" },
             { val: "20m", l: "Pickup time", c: "bg-white/80 border-slate-200 text-slate-800" },
             { val: "98%", l: "Delivery success", c: "bg-emerald-50/80 border-emerald-200 text-emerald-800" },
             { val: "95%", l: "Food utilization", c: "bg-emerald-50/80 border-emerald-200 text-emerald-800" }
          ].map((chip, i) => (
            <div key={i} className={`rounded-[32px] p-8 border backdrop-blur-md shadow-sm flex flex-col items-center justify-center text-center h-48 ${chip.c}`}>
              <div className="font-serif text-[40px] md:text-[56px] leading-[1] tracking-[-2px] mb-3">{chip.val}</div>
              <div className="font-sans text-[12px] font-bold uppercase tracking-[0.15em] opacity-60">{chip.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:text-left pl-4">
           <span className="font-serif text-[32px] text-primary italic">Faster decisions. Less waste.</span>
        </div>
      </section>

      {/* SECTION 4 — SCALE */}
      <section>
        <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-primary font-bold mb-3">Scale</div>
        <h2 className="font-serif text-[36px] md:text-[48px] text-textMain mb-10 leading-[1] tracking-tight">Scaling in real time</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            { val: <Counter end={14} />, l: "Cities active" },
            { val: <Counter end={100} suffix="+" />, l: "NGO partners" },
            { val: <Counter end={250} suffix="+" />, l: "Donors onboard" },
            { val: "Growing", l: "Network expansion", highlight: true }
          ].map((block, i) => (
            <div key={i} className={`rounded-[32px] p-8 md:p-10 border backdrop-blur-md flex flex-col justify-between h-48 ${block.highlight ? 'bg-primary border-primary text-white shadow-lg transform -translate-y-1' : 'bg-white/70 border-border text-textMain shadow-sm hover:-translate-y-1 transition-transform'}`}>
              <div className={`font-serif text-[46px] leading-[1] tracking-[-2px] ${block.highlight ? 'text-white' : 'text-primary'}`}>{block.val}</div>
              <div className={`font-sans text-[13px] font-bold uppercase tracking-wider ${block.highlight ? 'text-white/90' : 'text-textMuted'}`}>{block.l}</div>
            </div>
          ))}
        </div>

        <div className="inline-block bg-orange-50 text-orange-600 font-sans text-[13px] font-bold px-6 py-3 rounded-2xl shadow-sm border border-orange-100/60 uppercase tracking-widest">
          Built for city-wide deployment
        </div>
      </section>

      {/* SECTION 5 & 6 — ENVIRONMENT AND HUMAN IMPACT */}
      <div className="grid md:grid-cols-2 gap-10">
        <section className="bg-emerald-50/70 backdrop-blur-xl border border-emerald-200/60 rounded-[40px] p-10 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-10">
             <Factory className="text-emerald-600" size={36}/>
             <h2 className="font-serif text-[40px] text-emerald-900 leading-[1] tracking-tight">Waste reduced</h2>
          </div>
          <ul className="space-y-6 font-sans text-[17px] text-emerald-900/80 font-medium mb-12">
            <li className="flex items-center gap-4"><CheckCircle2 className="text-emerald-500 shrink-0" size={24}/> Food diverted from landfills</li>
            <li className="flex items-center gap-4"><CheckCircle2 className="text-emerald-500 shrink-0" size={24}/> Lower methane release</li>
            <li className="flex items-center gap-4"><CheckCircle2 className="text-emerald-500 shrink-0" size={24}/> Efficient redistribution</li>
          </ul>
          <div className="font-serif text-[28px] text-emerald-700 italic border-t border-emerald-200/50 pt-8">Less waste. <br className="md:hidden"/>More value.</div>
        </section>

        <section className="bg-orange-50/70 backdrop-blur-xl border border-orange-200/60 rounded-[40px] p-10 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-10">
             <HandHeart className="text-orange-600" size={36}/>
             <h2 className="font-serif text-[40px] text-orange-900 leading-[1] tracking-tight">Who it helps</h2>
          </div>
          <ul className="space-y-6 font-sans text-[17px] text-orange-900/80 font-medium mb-12">
            <li className="flex items-center gap-4"><CheckCircle2 className="text-orange-500 shrink-0" size={24}/> Underserved communities</li>
            <li className="flex items-center gap-4"><CheckCircle2 className="text-orange-500 shrink-0" size={24}/> NGO distribution networks</li>
            <li className="flex items-center gap-4"><CheckCircle2 className="text-orange-500 shrink-0" size={24}/> Local shelters & families</li>
            <li className="flex items-center gap-4"><CheckCircle2 className="text-orange-500 shrink-0" size={24}/> Daily food access</li>
          </ul>
          <div className="font-serif text-[28px] text-orange-700 italic border-t border-orange-200/50 pt-8">Surplus <span className="mx-2">&rarr;</span> Survival</div>
        </section>
      </div>

      {/* SECTION 7 — WHAT'S NEXT */}
      <section className="bg-white/50 backdrop-blur-xl rounded-[48px] p-10 md:p-20 border border-white/60 shadow-sm text-center">
        <h2 className="font-sans text-[13px] font-bold tracking-[0.2em] text-primary uppercase mb-6">What's Next</h2>
        <div className="font-serif text-[48px] md:text-[64px] text-textMain leading-[1] tracking-tight mb-16">Next phase</div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
           {[
             { t: "Predict demand before waste", icon: <Target className="text-blue-500 mb-6 mx-auto" size={40}/> },
             { t: "Direct restaurant integration", icon: <Activity className="text-emerald-500 mb-6 mx-auto" size={40}/> },
             { t: "Smarter route optimization", icon: <TrendingUp className="text-orange-500 mb-6 mx-auto" size={40}/> },
             { t: "Expand across India", icon: <Sparkles className="text-purple-500 mb-6 mx-auto" size={40}/> }
           ].map((item, i) => (
             <div key={i} className="bg-white/80 border border-slate-100 rounded-[32px] p-8 hover:-translate-y-2 transition-transform shadow-sm">
               {item.icon}
               <p className="font-sans text-[15px] font-bold text-textMain/80 leading-snug">{item.t}</p>
             </div>
           ))}
        </div>

        <div className="font-serif text-[clamp(40px,6vw,90px)] text-textMain tracking-[-3px] leading-[1]">
          From rescue <span className="text-primary mx-4">→</span> prevention
        </div>
      </section>

    </div>
  );
}
