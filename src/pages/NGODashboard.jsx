import React from 'react';
import Counter from "../components/ui/Counter";
import LiveDot from "../components/ui/LiveDot";
import Tag from "../components/ui/Tag";
import { Link } from "react-router-dom";
import { 
  BellRing, User, Activity, MapPin, Clock, Truck, 
  Check, X, AlertTriangle, ShieldCheck, Zap, ArrowRight,
  TrendingUp, Plus, Settings, Users, Navigation, Flame
} from "lucide-react";

export default function NGODashboard() {
  return (
    <div className="min-h-screen relative z-20 font-sans pb-32">
      
      {/* Background glow overrides for light mode */}
      <div className="fixed top-0 left-1/4 w-[800px] h-[800px] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8 relative z-10">
        
        {/* 1. TOP BAR */}
        <header className="flex flex-col md:flex-row justify-between md:items-end gap-6 border-b border-border pb-6 mb-8">
           <div>
             <h1 className="font-serif text-[32px] md:text-[40px] text-textMain tracking-tight leading-[1] mb-3">
               Welcome back, Smile Foundation
             </h1>
             <div className="flex flex-wrap items-center gap-3 font-sans text-[13px] font-bold tracking-widest uppercase">
               <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg shadow-sm">
                 <LiveDot size="w-2 h-2" /> LIVE PLATFORM
               </div>
               <span className="text-slate-300">•</span>
               <span className="text-blue-600">12 Requests Waiting</span>
               <span className="text-slate-300">•</span>
               <span className="text-red-500 flex items-center gap-1"><Flame size={14}/> 3 Expiring Soon</span>
             </div>
           </div>

           <div className="flex items-center gap-5">
              <div className="relative cursor-pointer hover:bg-slate-100 p-2 rounded-full transition-colors">
                 <BellRing className="text-slate-500" size={24} />
                 <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
              </div>
              <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 font-bold overflow-hidden cursor-pointer hover:border-emerald-500 transition-colors shadow-sm">
                 SF
              </div>
           </div>
        </header>

        {/* 2. COMMAND GRID */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
           
           <div className="bg-white/80 border border-slate-200 backdrop-blur-xl rounded-[32px] p-6 relative overflow-hidden group hover:border-emerald-300 hover:shadow-lg transition-all shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-[30px] group-hover:bg-emerald-200/50 transition-colors" />
              <div className="font-sans text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><TrendingUp size={14} className="text-emerald-500"/> Meals Rescued</div>
              <div className="font-serif text-[48px] text-emerald-600 leading-[1] tracking-tight">
                 <Counter end={320} />
              </div>
              <div className="text-[12px] text-emerald-600/80 font-bold mt-2 bg-emerald-50 max-w-max px-2 py-0.5 rounded-md border border-emerald-100">+45 today</div>
           </div>

           <div className="bg-white/80 border border-slate-200 backdrop-blur-xl rounded-[32px] p-6 relative overflow-hidden group hover:border-red-300 hover:shadow-lg transition-all shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/50 rounded-full blur-[30px] group-hover:bg-red-200/50 transition-colors" />
              <div className="font-sans text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><AlertTriangle size={14} className="text-red-500"/> Pending Requests</div>
              <div className="font-serif text-[48px] text-red-500 leading-[1] tracking-tight">
                 12
              </div>
              <div className="text-[12px] text-red-600/80 font-bold mt-2 bg-red-50 max-w-max px-2 py-0.5 rounded-md border border-red-100">Requires action</div>
           </div>

           <div className="bg-white/80 border border-slate-200 backdrop-blur-xl rounded-[32px] p-6 relative overflow-hidden group hover:border-blue-300 hover:shadow-lg transition-all shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-[30px] group-hover:bg-blue-200/50 transition-colors" />
              <div className="font-sans text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Truck size={14} className="text-blue-500"/> Active Pickups</div>
              <div className="font-serif text-[48px] text-blue-600 leading-[1] tracking-tight">
                 5
              </div>
              <div className="text-[12px] text-blue-600/80 font-bold mt-2 bg-blue-50 max-w-max px-2 py-0.5 rounded-md border border-blue-100">In transit</div>
           </div>

           <div className="bg-white/80 border border-slate-200 backdrop-blur-xl rounded-[32px] p-6 relative overflow-hidden group hover:border-purple-300 hover:shadow-lg transition-all shadow-sm flex flex-col justify-center items-center text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-full blur-[30px]" />
              <div className="w-20 h-20 rounded-full border-4 border-slate-100 border-t-purple-500 flex items-center justify-center font-serif text-[28px] text-textMain tracking-tight mb-2 relative bg-white">
                 98<span className="text-[16px] text-slate-400">%</span>
              </div>
              <div className="font-sans text-[12px] font-bold text-slate-500 uppercase tracking-widest">Success Rate</div>
           </div>

        </section>

        {/* MAIN LAYOUT GRID */}
        <div className="grid xl:grid-cols-[1fr_400px] gap-8">
           
           <div className="flex flex-col gap-8">
              {/* 3. LIVE DONATION FEED */}
              <section className="bg-white/60 border border-slate-200 rounded-[40px] p-6 md:p-10 backdrop-blur-2xl shadow-sm">
                 <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-4">
                    <h2 className="font-serif text-[32px] text-textMain tracking-tight">Incoming Donations</h2>
                    <div className="flex items-center gap-2 text-emerald-600 text-[12px] font-bold uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100"><LiveDot size="w-2 h-2"/> Live Feed</div>
                 </div>

                 <div className="flex flex-col gap-4">
                    {/* FEED ITEM 1 (URGENT) */}
                    <div className="bg-white border border-slate-200 hover:border-red-300 transition-all rounded-3xl p-6 flex flex-col md:flex-row gap-6 md:items-center relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(239,68,68,0.1)] animate-fadeUp">
                       <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-red-400 to-red-600" />
                       
                       <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                             <div className="flex flex-wrap items-center gap-3">
                               <div className="bg-orange-50 border border-orange-200 text-orange-600 font-sans text-[11px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg flex items-center gap-1.5"><span className="text-[14px]">🍛</span> Cooked Meals</div>
                               <Tag label="HIGH PRIORITY" color="#ef4444" />
                             </div>
                          </div>
                          <h3 className="font-sans text-[22px] font-bold text-textMain mb-3 leading-tight">20 Meals · From Taj Lands End</h3>
                          <div className="flex flex-wrap items-center gap-4 font-sans text-[14px] font-bold">
                             <span className="text-slate-600 flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"><MapPin size={16} className="text-blue-500"/> Dharavi, Mumbai</span>
                             <span className="text-red-600 flex items-center gap-1.5 bg-red-50 border border-red-100 px-3 py-1.5 rounded-lg"><Clock size={16}/> Expires in 2h 15m</span>
                          </div>
                       </div>

                       <div className="flex md:flex-col gap-3 shrink-0">
                          <button className="flex-1 md:flex-none bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 font-sans text-[15px]">
                             <Check size={18}/> Accept
                          </button>
                          <button className="flex-1 md:flex-none bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-500 font-bold px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 font-sans text-[15px]">
                             <X size={18}/> Reject
                          </button>
                       </div>
                    </div>

                    {/* FEED ITEM 2 (NORMAL) */}
                    <div className="bg-white border border-slate-200 hover:border-emerald-300 transition-all rounded-3xl p-6 flex flex-col md:flex-row gap-6 md:items-center relative overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)]">
                       <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-400 to-emerald-600" />
                       
                       <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                             <div className="flex flex-wrap items-center gap-3">
                               <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 font-sans text-[11px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg flex items-center gap-1.5"><span className="text-[14px]">🥗</span> Fresh Produce</div>
                               <div className="bg-slate-100 text-slate-500 font-sans text-[10px] font-black uppercase tracking-widest px-2.5 py-1.5 rounded-md border border-slate-200">MEDIUM</div>
                             </div>
                          </div>
                          <h3 className="font-sans text-[22px] font-bold text-textMain mb-3 leading-tight">45 Kg Veggies · From BigBazaar</h3>
                          <div className="flex flex-wrap items-center gap-4 font-sans text-[14px] font-bold">
                             <span className="text-slate-600 flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"><MapPin size={16} className="text-blue-500"/> Vile Parle, Mumbai</span>
                             <span className="text-amber-700 flex items-center gap-1.5 bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-lg"><Clock size={16}/> Expires in 8h 00m</span>
                          </div>
                       </div>

                       <div className="flex md:flex-col gap-3 shrink-0">
                          <button className="flex-1 md:flex-none bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 font-bold px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 font-sans text-[15px]">
                             <Check size={18}/> Accept
                          </button>
                          <button className="flex-1 md:flex-none bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-500 font-bold px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 font-sans text-[15px]">
                             <X size={18}/> Reject
                          </button>
                       </div>
                    </div>

                 </div>
              </section>

              {/* 5. MAP + RADIUS VIEW */}
              <section className="bg-slate-900 border-4 border-white rounded-[40px] p-6 md:p-10 relative overflow-hidden h-[400px] shadow-2xl">
                 <div className="absolute top-6 left-10 z-10">
                    <h2 className="font-serif text-[28px] text-white tracking-tight mb-2 drop-shadow-md">Active Grid Radar</h2>
                    <div className="flex gap-4 font-sans text-[11px] font-bold text-slate-300 uppercase tracking-[0.15em] drop-shadow-md bg-slate-950/40 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700/50">
                       <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]" /> Incoming</span>
                       <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" /> Pickups</span>
                    </div>
                 </div>

                 <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-70">
                    {/* Grid Background */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, #10b981 1.5px, transparent 1.5px)`, backgroundSize: '30px 30px' }} />
                    
                    {/* Dark map radar grid */}
                    <div className="w-[150%] aspect-square border-[3px] border-slate-800 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute w-[100%] aspect-square border-2 border-slate-800/80 rounded-full" />
                    <div className="absolute w-[50%] aspect-square border border-slate-800 rounded-full bg-slate-800/20 backdrop-blur-sm" />
                    
                    {/* Radar Sweep */}
                    <div className="absolute w-full h-full rounded-full animate-[spin_4s_linear_infinite]" style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(59, 130, 246, 0.3) 100%)' }} />

                    {/* Center Point - NGO */}
                    <div className="absolute w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-[0_0_30px_rgba(16,185,129,0.8)] z-20 flex items-center justify-center">
                       <div className="w-10 h-10 absolute border-[3px] border-emerald-400 rounded-full animate-ping" />
                    </div>

                    {/* Nodes */}
                    <div className="absolute top-[35%] left-[60%] w-3.5 h-3.5 bg-orange-500 rounded-full border-2 border-white shadow-[0_0_20px_rgba(249,115,22,1)]" />
                    <div className="absolute top-[65%] left-[30%] w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-white shadow-[0_0_20px_rgba(59,130,246,1)]" />
                    <div className="absolute top-[45%] left-[25%] w-3.5 h-3.5 bg-orange-500 rounded-full border-2 border-white shadow-[0_0_20px_rgba(249,115,22,1)] opacity-70" />
                 </div>
              </section>
           </div>

           <div className="flex flex-col gap-6">
              
              {/* 4. ACTIVE OPERATIONS PANEL */}
              <section className="bg-white/80 border border-slate-200 backdrop-blur-xl rounded-[40px] p-8 shadow-sm">
                 <h2 className="font-serif text-[28px] text-textMain tracking-tight mb-6">Ongoing Pickups</h2>
                 
                 <div className="flex flex-col gap-5">
                    {/* Item 1 */}
                    <div className="bg-white border border-slate-200 p-5 rounded-3xl relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                       <div className="flex justify-between items-center mb-4">
                         <div className="font-sans text-[15px] font-bold text-slate-700 flex items-center gap-2"><div className="bg-slate-100 p-1.5 rounded-lg"><User size={16} className="text-blue-500"/></div> Kiran M.</div>
                         <div className="bg-blue-50 text-blue-600 border border-blue-200 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md">EN ROUTE</div>
                       </div>
                       <div className="font-sans text-[14px] font-bold text-slate-500 mb-5 flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl">
                         <MapPin size={16} className="text-slate-400"/> ETA: <span className="text-textMain">18 min</span>
                       </div>
                       {/* Progress Bar */}
                       <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden relative border border-slate-200">
                         <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
                       </div>
                       <div className="flex justify-between mt-3 font-sans text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                         <span>Pickup</span>
                         <span className="text-blue-600">Transit</span>
                         <span>Deliver</span>
                       </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-white border border-slate-200 p-5 rounded-3xl relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                       <div className="flex justify-between items-center mb-4">
                         <div className="font-sans text-[15px] font-bold text-slate-700 flex items-center gap-2"><div className="bg-slate-100 p-1.5 rounded-lg"><User size={16} className="text-amber-500"/></div> Rahul T.</div>
                         <div className="bg-amber-50 text-amber-600 border border-amber-200 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md">AT PICKUP</div>
                       </div>
                       <div className="font-sans text-[14px] font-bold text-slate-500 mb-5 flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl">
                         <MapPin size={16} className="text-slate-400"/> Location: <span className="text-textMain">Andheri East</span>
                       </div>
                       {/* Progress Bar */}
                       <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden relative border border-slate-200">
                         <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.3)]" />
                       </div>
                    </div>
                 </div>
              </section>

              {/* 7. SMART ALERTS PANEL */}
              <section className="bg-white/80 border border-slate-200 backdrop-blur-xl rounded-[40px] p-8 shadow-sm">
                 <h2 className="font-serif text-[28px] text-textMain tracking-tight mb-6">Action Needed</h2>
                 <div className="flex flex-col gap-4">
                    <div className="bg-red-50/80 border border-red-200 p-5 rounded-2xl flex gap-4 items-start cursor-pointer hover:bg-red-50 hover:shadow-sm transition-all group">
                       <div className="bg-white p-2 rounded-xl shadow-sm border border-red-100 shrink-0 group-hover:scale-110 transition-transform"><AlertTriangle className="text-red-500" size={18}/></div>
                       <div>
                         <div className="font-sans text-[14px] font-bold text-red-950 mb-1.5 leading-snug">Food expiring in 30 mins</div>
                         <div className="font-sans text-[11px] font-black text-red-600 uppercase tracking-widest flex items-center gap-1">Assign rider now <ArrowRight size={12}/></div>
                       </div>
                    </div>
                    <div className="bg-emerald-50/80 border border-emerald-200 p-5 rounded-2xl flex gap-4 items-start cursor-pointer hover:bg-emerald-50 hover:shadow-sm transition-all group">
                       <div className="bg-white p-2 rounded-xl shadow-sm border border-emerald-100 shrink-0 group-hover:scale-110 transition-transform"><MapPin className="text-emerald-500" size={18}/></div>
                       <div>
                         <div className="font-sans text-[14px] font-bold text-emerald-950 mb-1.5 leading-snug">New donation within 2 km</div>
                         <div className="font-sans text-[11px] font-black text-emerald-600 uppercase tracking-widest flex items-center gap-1">Review match <ArrowRight size={12}/></div>
                       </div>
                    </div>
                 </div>
              </section>

              {/* 6. IMPACT SNAPSHOT */}
              <section className="bg-white/80 border border-slate-200 backdrop-blur-xl rounded-[40px] p-8 shadow-sm">
                 <div className="font-sans text-[11px] uppercase tracking-widest font-bold text-emerald-500 mb-2">Today's Overview</div>
                 <h2 className="font-serif text-[28px] text-textMain tracking-tight mb-8">Impact Generator</h2>
                 <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                       <span className="font-sans text-[15px] font-bold text-slate-500">Meals Delivered</span>
                       <span className="font-sans text-[18px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-100">320</span>
                    </div>
                    <div className="flex justify-between items-center flex-wrap gap-2 border-b border-slate-100 pb-4">
                       <span className="font-sans text-[15px] font-bold text-slate-500">Areas Served</span>
                       <span className="font-sans text-[14px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-xl">Dharavi, Kurla</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="font-sans text-[15px] font-bold text-slate-500">Waste Prevented</span>
                       <span className="font-sans text-[18px] font-black text-orange-600 bg-orange-50 px-3 py-1 rounded-xl border border-orange-100">~120 kg</span>
                    </div>
                 </div>
              </section>

           </div>

        </div>
      </div>

      {/* 8. QUICK ACTION BAR (FLOATING FAB) */}
      <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end gap-3 group">
         <div className="hidden group-hover:flex flex-col gap-3 items-end animate-fadeUp origin-bottom">
            <button className="bg-textMain hover:bg-black text-white font-sans text-[14px] font-bold py-3.5 px-6 rounded-full flex items-center gap-2.5 shadow-xl transition-colors">
              <Users size={18}/> Add Volunteer
            </button>
            <button className="bg-textMain hover:bg-black text-white font-sans text-[14px] font-bold py-3.5 px-6 rounded-full flex items-center gap-2.5 shadow-xl transition-colors">
              <Navigation size={18}/> Assign Rider
            </button>
            <button className="bg-textMain hover:bg-black text-white font-sans text-[14px] font-bold py-3.5 px-6 rounded-full flex items-center gap-2.5 shadow-xl transition-colors">
              <Settings size={18}/> Update Capacity
            </button>
         </div>
         <button className="w-16 h-16 bg-primary hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-transform hover:scale-105 active:scale-95 border-[3px] border-emerald-200">
           <Plus size={32} />
         </button>
      </div>

    </div>
  );
}
