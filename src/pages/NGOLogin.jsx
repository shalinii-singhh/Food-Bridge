import React from 'react';
import Tag from "../components/ui/Tag";
import { Link } from "react-router-dom";
import { 
  BellRing, PackageCheck, Truck, MessageSquare, 
  ArrowRight, ShieldCheck, Zap
} from "lucide-react";

export default function NGOLoginPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-20 pb-32 relative z-10">
      
      <div className="grid lg:grid-cols-[1fr_450px] gap-12 lg:gap-24 items-center">
        
        {/* LEFT: FORM SECTION */}
        <div className="flex flex-col max-w-lg w-full">
          <h1 className="font-serif text-[clamp(40px,5vw,56px)] leading-[1.05] text-textMain tracking-[-1px] mb-4">
            NGO Dashboard Access
          </h1>
          <p className="font-sans text-[18px] text-textMuted font-medium mb-10 leading-relaxed">
            Log in to manage incoming food donations, pickups, and impact <span className="text-primary italic">— all in real time.</span>
          </p>

          <form className="flex flex-col gap-6 mb-10 w-full">
             <div>
               <label className="block font-sans text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-3">Email Address</label>
               <input 
                 type="email" 
                 placeholder="name@ngo-domain.org"
                 className="w-full bg-white border border-slate-200 text-textMain font-sans text-[16px] font-bold px-5 py-4 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:font-medium placeholder:text-slate-400 shadow-sm"
               />
             </div>
             <div>
               <div className="flex justify-between items-center mb-3">
                 <label className="block font-sans text-[12px] font-bold text-slate-500 uppercase tracking-widest">Password</label>
                 <a href="#" className="font-sans text-[12px] font-bold text-primary hover:text-emerald-700 transition-colors">Forgot Password?</a>
               </div>
               <input 
                 type="password" 
                 placeholder="••••••••"
                 className="w-full bg-white border border-slate-200 text-textMain font-sans text-[16px] font-bold px-5 py-4 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:font-medium placeholder:text-slate-400 shadow-sm"
               />
             </div>
             
             <Link to="/dashboard" className="mt-4 bg-primary hover:bg-emerald-600 transition-colors flex items-center justify-center gap-3 text-white font-sans text-[18px] font-bold px-8 py-5 rounded-xl shadow-xl shadow-emerald-500/20 group cursor-pointer w-full text-center">
               Login to Dashboard <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
             </Link>
          </form>

          {/* TRUST STRIP */}
          <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-slate-200 px-6 py-3 rounded-full w-max">
             <Tag label="LIVE" color="#10b981" />
             <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mx-1" />
             <Tag label="VERIFIED" color="#3b82f6" />
             <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mx-1" />
             <Tag label="TRACKED" color="#f59e0b" />
          </div>

          <div className="mt-8 font-sans text-[14px] font-bold text-slate-500">
             Not a partner yet? <Link to="/join" className="text-primary hover:text-emerald-700">Join the network</Link>
          </div>
        </div>

        {/* RIGHT: SIDE INFO PANEL */}
        <div className="bg-slate-900 border border-slate-800 rounded-[40px] p-10 md:p-12 shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="font-sans text-[11px] font-bold tracking-[0.2em] text-emerald-400 uppercase mb-8 flex items-center gap-2">
            <Zap size={14} className="fill-emerald-400"/> Operational Edge
          </div>

          <div className="flex flex-col gap-8 mb-12 relative z-10">
            {[
              { icon: <BellRing size={22}/>, t: "Receive instant donation alerts" },
              { icon: <PackageCheck size={22}/>, t: "Accept or reject within seconds" },
              { icon: <Truck size={22}/>, t: "Track pickup → delivery lifecycle" },
              { icon: <MessageSquare size={22}/>, t: "Coordinate with donors seamlessly" }
            ].map((feat, i) => (
               <div key={i} className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-[14px] bg-slate-800/50 border border-slate-700 flex items-center justify-center text-emerald-400 shadow-sm shrink-0">
                    {feat.icon}
                  </div>
                  <span className="font-sans text-[16px] font-bold text-slate-200 leading-snug">{feat.t}</span>
               </div>
            ))}
          </div>

          {/* MICRO PROOF */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl relative z-10 flex items-center gap-4">
             <div className="bg-emerald-500 text-white p-2 rounded-lg">
                <ShieldCheck size={20}/>
             </div>
             <div>
               <div className="font-sans text-[12px] uppercase tracking-widest font-bold text-emerald-300/70 mb-1">Network Performance</div>
               <div className="font-sans text-[16px] font-extrabold text-emerald-400 tracking-tight">Avg response time: &lt; 20s</div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}
