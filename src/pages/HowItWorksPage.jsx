import React from 'react';
import { ArrowRight, MapPin, Clock, Scale, ShieldCheck, FileCheck, ThermometerSun, BookOpenCheck } from "lucide-react";
import Tag from "../components/ui/Tag";

export default function HowItWorksPage() {
  return (
    <div className="max-w-[1300px] mx-auto px-6 md:px-12 pt-20 pb-32 relative z-10 flex flex-col gap-28">
      
      {/* SECTION 1 — SYSTEM FLOW */}
      <section>
        <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-primary font-bold mb-3">System Flow</div>
        <h2 className="font-serif text-[clamp(40px,5vw,56px)] leading-[1] text-textMain mb-12 tracking-tight">How it actually moves</h2>
        
        <div className="bg-white/70 backdrop-blur-xl border border-emerald-100 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.02)] overflow-x-auto">
          <div className="flex items-start gap-4 min-w-[900px]">
            {[
              { s: "UPLOAD", desc: "Food + Time + Location" },
              { s: "ANALYZE", desc: "Expiry window calculated" },
              { s: "MATCH", desc: "Best NGO ranked" },
              { s: "NOTIFY", desc: "Instant alert sent" },
              { s: "PICKUP", desc: "Rider assigned" },
              { s: "DELIVER", desc: "Delivered fast", last: true }
            ].map((item, i) => (
              <React.Fragment key={i}>
                <div className="flex-1 flex flex-col">
                  <span className="font-sans text-[15px] font-bold text-textMain tracking-[0.15em] mb-3">{item.s}</span>
                  <span className="font-sans text-[13px] text-textMuted leading-snug">{item.desc}</span>
                </div>
                {!item.last && (
                  <div className="text-primary/30 mt-1 shrink-0 px-2"><ArrowRight size={20} /></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <span className="bg-orange-50 text-orange-600 font-sans text-[13px] font-bold px-5 py-2.5 rounded-xl shadow-sm border border-orange-100/60">
            Time-sensitive system. Every second matters.
          </span>
        </div>
      </section>

      {/* SECTION 2 — MATCHING CORE */}
      <section>
        <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-primary font-bold mb-3">Matching Core</div>
        <h2 className="font-serif text-[clamp(40px,5vw,56px)] leading-[1] text-textMain mb-12 tracking-tight">Decision engine</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { t: "Distance", sub: "Nearest first", icon: <MapPin className="text-primary mb-5" size={28} /> },
            { t: "Urgency", sub: "Expiry-driven priority", icon: <Clock className="text-amber-500 mb-5" size={28} /> },
            { t: "Capacity", sub: "No overload, balanced distribution", icon: <Scale className="text-blue-500 mb-5" size={28} /> },
          ].map((card, i) => (
            <div key={i} className="bg-white/80 hover:-translate-y-2 transition-transform backdrop-blur-xl border border-border rounded-3xl p-8 shadow-sm">
              {card.icon}
              <h3 className="font-serif text-[28px] text-textMain mb-2 tracking-tight">{card.t}</h3>
              <p className="font-sans text-[14px] text-textMuted font-medium">{card.sub}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-[32px] p-8 md:px-12 border border-emerald-100 shadow-inner">
          <h3 className="font-serif text-[32px] md:text-[40px] text-emerald-800 leading-none tracking-tight">Top 3 NGOs. Ranked instantly.</h3>
          <div className="font-sans text-[12px] font-bold tracking-[0.15em] text-emerald-600 uppercase flex gap-2">
            AUTO <span className="opacity-50">·</span> REAL-TIME <span className="opacity-50">·</span> NO HUMAN DELAY
          </div>
        </div>
      </section>

      {/* SECTION 3 — LIVE SYSTEM */}
      <section className="grid md:grid-cols-[1fr_400px] gap-12 items-center">
        <div>
          <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-primary font-bold mb-3">Live System</div>
          <h2 className="font-serif text-[clamp(40px,5vw,56px)] leading-[1] text-textMain mb-10 tracking-tight">System in motion</h2>
          
          <div className="flex flex-col gap-5 font-sans text-[16px] text-textMuted mb-12 border-l-2 border-emerald-200 pl-6 py-2">
            <p className="text-textMain font-medium">— NGO responds in seconds</p>
            <p>— ETA generated instantly</p>
            <p>— Status updates continuously</p>
          </div>

          <div className="inline-block bg-white/70 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-emerald-100 shadow-sm text-emerald-800 font-sans text-[14px] font-semibold italic">
            You don't track manually. The system breathes live.
          </div>
        </div>

        <div className="bg-textMain rounded-[32px] p-10 shadow-2xl flex flex-col gap-4 overflow-hidden relative">
          <div className="absolute -top-10 -right-10 w-[200px] h-[200px] bg-primary rounded-full blur-[80px] opacity-20 pointer-events-none" />
          {[
            { label: "LIVE", color: "#10b981", delay: "0s" },
            { label: "MATCHED", color: "#3b82f6", delay: "0.2s" },
            { label: "ACCEPTED", color: "#6366f1", delay: "0.4s" },
            { label: "EN ROUTE", color: "#f59e0b", delay: "0.6s" },
            { label: "DELIVERED", color: "#ec4899", delay: "0.8s" }
          ].map((tag, i) => (
            <div key={i} className="animate-fadeUp flex" style={{ animationDelay: tag.delay, animationFillMode: "both" }}>
              <Tag label={tag.label} color={tag.color} />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — DELIVERY ENGINE */}
      <section>
        <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-primary font-bold mb-3">Delivery Engine</div>
        <h2 className="font-serif text-[clamp(40px,5vw,56px)] leading-[1] text-textMain mb-12 tracking-tight">60-minute pipeline</h2>

        <div className="bg-white/60 backdrop-blur-xl border border-border rounded-[40px] p-10 md:p-16 shadow-sm relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-16 relative z-10">
            <div className="hidden md:block absolute top-[40%] left-10 right-10 h-[2px] bg-emerald-100 -translate-y-1/2 z-0"></div>
            {[
              "SOURCE", "PICKUP", "ROUTE", "DROP"
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className="w-[88px] h-[88px] rounded-full bg-white border border-emerald-200 shadow-[0_8px_20px_rgba(52,211,153,0.15)] flex items-center justify-center font-sans font-bold text-[13px] tracking-[0.1em] text-emerald-700 mb-3">
                  {step}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left font-sans text-[15px] text-textMuted mb-20 px-4 relative z-10">
            <p>→ Nearest rider auto-assigned</p>
            <p>→ Routes optimized on the fly</p>
            <p>→ Multiple pickups combined (if viable)</p>
          </div>

          <div className="flex justify-center relative z-10">
            <h3 className="font-serif text-[32px] md:text-[50px] tracking-tight text-orange-600 bg-orange-50/90 px-10 py-5 rounded-[24px] shadow-sm border border-orange-100 overflow-hidden">
              <span className="relative z-10">Faster delivery = less waste</span>
            </h3>
          </div>
        </div>
      </section>

      {/* SECTION 5 — TRUST LAYER */}
      <section>
        <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-primary font-bold mb-3">Trust Layer</div>
        <h2 className="font-serif text-[clamp(40px,5vw,56px)] leading-[1] text-textMain mb-12 tracking-tight">Built for reality</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { title: "Verified NGOs", desc: "Only trusted partners", icon: <ShieldCheck className="text-primary" size={28} /> },
            { title: "Food Safety", desc: "Handling guidelines enforced", icon: <ThermometerSun className="text-amber-500" size={28} /> },
            { title: "Expiry Control", desc: "Unsafe food never moves", icon: <FileCheck className="text-red-500" size={28} /> },
            { title: "Tracking Logs", desc: "Every step recorded", icon: <BookOpenCheck className="text-blue-500" size={28} /> },
          ].map((block, i) => (
            <div key={i} className="flex items-center gap-6 bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-border shadow-sm">
              <div className="bg-white p-4 rounded-[20px] shadow-sm border border-slate-100">{block.icon}</div>
              <div className="flex flex-col gap-1">
                <h4 className="font-sans text-[18px] font-bold text-textMain">{block.title}</h4>
                <p className="font-sans text-[14px] text-textMuted font-medium">→ {block.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="font-sans text-[13px] font-bold tracking-[0.2em] uppercase text-center text-primary bg-white/50 backdrop-blur-md py-5 rounded-2xl border border-emerald-100 shadow-sm">
          Transparent <span className="text-primary/30 mx-4">·</span> Accountable <span className="text-primary/30 mx-4">·</span> Reliable
        </div>
      </section>

      {/* SECTION 6 — DIFFERENCE */}
      <section>
        <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-primary font-bold mb-3 text-center">Difference</div>
        <h2 className="font-serif text-[clamp(40px,5vw,56px)] leading-[1] text-textMain mb-12 text-center tracking-tight">Why this wins</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-4xl mx-auto">
          {/* OLD WAY */}
          <div className="bg-red-50/80 backdrop-blur-md border border-red-100 rounded-[32px] p-10 md:p-12 relative overflow-hidden">
            <h3 className="font-sans text-[12px] font-bold tracking-[0.15em] text-red-500 uppercase mb-8">The Old Way</h3>
            <ul className="space-y-5 font-sans text-[16px] text-red-900/60 font-medium">
              <li className="flex items-center gap-4"><span className="text-red-300">✕</span> Manual calls</li>
              <li className="flex items-center gap-4"><span className="text-red-300">✕</span> Random matching</li>
              <li className="flex items-center gap-4"><span className="text-red-300">✕</span> Delays</li>
              <li className="flex items-center gap-4"><span className="text-red-300">✕</span> Food wasted</li>
            </ul>
          </div>

          {/* FOODBRIDGE */}
          <div className="bg-textMain text-white rounded-[32px] p-10 md:p-12 relative overflow-hidden shadow-2xl">
             <div className="absolute -bottom-20 -right-20 w-[250px] h-[250px] bg-primary rounded-full blur-[80px] opacity-30 pointer-events-none" />
             <h3 className="font-sans text-[12px] font-bold tracking-[0.15em] text-primaryLight uppercase mb-8">FoodBridge</h3>
             <ul className="space-y-5 font-sans text-[16px] text-white/80 font-medium relative z-10">
              <li className="flex items-center gap-4"><span className="text-primaryLight text-lg">✓</span> Instant system decisions</li>
              <li className="flex items-center gap-4"><span className="text-primaryLight text-lg">✓</span> Smart matching</li>
              <li className="flex items-center gap-4"><span className="text-primaryLight text-lg">✓</span> Live coordination</li>
              <li className="flex items-center gap-4"><span className="text-primaryLight text-lg">✓</span> Zero-delay rescue</li>
            </ul>
          </div>
        </div>

        <div className="text-center font-serif text-[clamp(36px,5vw,60px)] leading-tight text-textMain tracking-[-2px]">
          We don't list food.<br />
          <span className="text-primary italic">We move it.</span>
        </div>
      </section>

    </div>
  );
}
