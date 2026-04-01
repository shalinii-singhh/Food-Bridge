import React from 'react';
import Tag from "../components/ui/Tag";
import { Link } from "react-router-dom";
import { 
  Building2, MapPin, Contact2, CheckCircle, 
  Clock, ShieldCheck, PieChart, Navigation, Leaf
} from "lucide-react";

export default function NGOJoinPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-16 pb-32 relative z-10">
      
      {/* HERO SECTION */}
      <section className="text-center md:text-left border-b border-border pb-12 mb-16">
        <div className="flex justify-center md:justify-start gap-2 mb-6">
          <Tag label="REAL-TIME" color="#10b981" />
          <Tag label="LOCAL" color="#3b82f6" />
          <Tag label="IMPACT-DRIVEN" color="#f59e0b" />
        </div>
        <h1 className="font-serif text-[clamp(44px,6vw,72px)] leading-[1.05] text-textMain tracking-[-2px] mb-6">
          Partner With Us. <br className="hidden md:block"/><span className="text-primary italic">Feed More Lives.</span>
        </h1>
        <p className="font-sans text-[20px] md:text-[22px] text-textMuted font-medium mb-4 max-w-2xl">
          Join the network and start receiving verified food donations near you — instantly.
        </p>
      </section>

      <div className="grid lg:grid-cols-[1fr_450px] gap-12 lg:gap-20">
        
        {/* LEFT: FORM SECTION */}
        <div className="flex flex-col gap-12">
          
          <form className="flex flex-col gap-10">
             
             {/* Basic Info */}
             <div className="bg-white/80 border border-slate-200 backdrop-blur-xl rounded-[32px] p-8 md:p-10 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-3 font-sans text-[13px] font-bold tracking-[0.2em] text-blue-600 uppercase mb-6 border-b border-slate-100 pb-4">
                  <Building2 size={18}/> Basic Info
                </div>
                <div className="grid gap-6">
                  <div>
                    <label className="block font-sans text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-3">NGO Name</label>
                    <input type="text" placeholder="e.g. Smile Foundation" className="w-full bg-slate-50 border border-slate-200 text-textMain font-sans text-[16px] font-bold px-5 py-4 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:font-medium placeholder:text-slate-400" />
                  </div>
                  <div>
                    <label className="block font-sans text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">Registration Number <span className="text-amber-500"><ShieldCheck size={14}/></span></label>
                    <input type="text" placeholder="Official Govt. Registration ID" className="w-full bg-slate-50 border border-slate-200 text-textMain font-sans text-[16px] font-bold px-5 py-4 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:font-medium placeholder:text-slate-400" />
                  </div>
                </div>
             </div>

             {/* Address Info */}
             <div className="bg-white/80 border border-slate-200 backdrop-blur-xl rounded-[32px] p-8 md:p-10 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-3 font-sans text-[13px] font-bold tracking-[0.2em] text-orange-600 uppercase mb-6 border-b border-slate-100 pb-4">
                  <MapPin size={18}/> Address
                </div>
                <div className="grid gap-6">
                  <div>
                    <label className="block font-sans text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-3">Headquarters / Main Center</label>
                    <input type="text" placeholder="Street Address" className="w-full bg-slate-50 border border-slate-200 text-textMain font-sans text-[16px] font-bold px-5 py-4 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:font-medium placeholder:text-slate-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input type="text" placeholder="City" className="w-full bg-slate-50 border border-slate-200 text-textMain font-sans text-[16px] font-bold px-5 py-4 rounded-xl focus:border-primary transition-all placeholder:font-medium placeholder:text-slate-400" />
                    </div>
                    <div>
                      <input type="text" placeholder="Pincode" className="w-full bg-slate-50 border border-slate-200 text-textMain font-sans text-[16px] font-bold px-5 py-4 rounded-xl focus:border-primary transition-all placeholder:font-medium placeholder:text-slate-400" />
                    </div>
                  </div>
                </div>
             </div>

             {/* Contact Details */}
             <div className="bg-white/80 border border-slate-200 backdrop-blur-xl rounded-[32px] p-8 md:p-10 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-3 font-sans text-[13px] font-bold tracking-[0.2em] text-purple-600 uppercase mb-6 border-b border-slate-100 pb-4">
                  <Contact2 size={18}/> Contact Details
                </div>
                <div className="grid gap-6">
                  <div>
                    <label className="block font-sans text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-3">Primary Contact Person</label>
                    <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 text-textMain font-sans text-[16px] font-bold px-5 py-4 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:font-medium placeholder:text-slate-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-3">Email</label>
                      <input type="email" placeholder="name@domain.com" className="w-full bg-slate-50 border border-slate-200 text-textMain font-sans text-[16px] font-bold px-5 py-4 rounded-xl focus:border-primary transition-all placeholder:font-medium placeholder:text-slate-400" />
                    </div>
                    <div>
                      <label className="block font-sans text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-3">Phone</label>
                      <input type="tel" placeholder="+91" className="w-full bg-slate-50 border border-slate-200 text-textMain font-sans text-[16px] font-bold px-5 py-4 rounded-xl focus:border-primary transition-all placeholder:font-medium placeholder:text-slate-400" />
                    </div>
                  </div>
                </div>
             </div>

             {/* Preferences */}
             <div className="bg-white/80 border border-slate-200 backdrop-blur-xl rounded-[32px] p-8 md:p-10 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-3 font-sans text-[13px] font-bold tracking-[0.2em] text-emerald-600 uppercase mb-6 border-b border-slate-100 pb-4">
                  <Leaf size={18}/> Operations & Preferences
                </div>
                <div className="grid gap-8">
                  <div>
                    <label className="block font-sans text-[13px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-4">Accepted Food Types</label>
                    <div className="flex flex-wrap gap-3">
                      {[ "Veg", "Non-Veg", "Packaged", "Cooked" ].map(t => (
                        <div key={t} className="px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:border-primary hover:bg-emerald-50 cursor-pointer transition-colors font-sans text-[14px] font-bold text-slate-600 flex items-center gap-2">
                          <div className="w-4 h-4 rounded border border-slate-300 bg-white" /> {t}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-3">Operating Hours</label>
                      <input type="text" placeholder="e.g. 9 AM - 6 PM" className="w-full bg-slate-50 border border-slate-200 text-textMain font-sans text-[16px] font-bold px-5 py-4 rounded-xl focus:border-primary transition-all placeholder:font-medium placeholder:text-slate-400" />
                    </div>
                    <div>
                      <label className="block font-sans text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-3">Pickup Vehicle Available?</label>
                      <select className="w-full bg-slate-50 border border-slate-200 text-textMain font-sans text-[16px] font-bold px-5 py-4 rounded-xl focus:border-primary transition-all appearance-none cursor-pointer">
                        <option>Yes, we can pickup</option>
                        <option>No, need delivery</option>
                      </select>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* CTA Section */}
             <div className="flex flex-col items-center sm:items-start gap-4 mt-6">
                <button type="button" className="w-full sm:w-auto bg-primary hover:bg-emerald-600 transition-colors flex items-center justify-center gap-3 text-white font-sans text-[20px] font-bold px-12 py-5 rounded-2xl shadow-xl shadow-emerald-500/30">
                  <CheckCircle size={24}/> Join Network Now
                </button>
                <div className="font-sans text-[14px] font-bold text-slate-500">
                   Already registered? <Link to="/login" className="text-primary hover:text-emerald-700">Login to Dashboard</Link>
                </div>
             </div>

          </form>
        </div>

        {/* RIGHT: VALUE PROP PANEL */}
        <div>
          <div className="bg-slate-900 border border-slate-800 rounded-[48px] p-10 md:p-12 shadow-2xl relative overflow-hidden sticky top-24">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="font-sans text-[11px] font-bold tracking-[0.2em] text-emerald-400 uppercase mb-8 flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-400"/> Why Partner With Us?
            </div>

            <div className="flex flex-col gap-10 mb-16 relative z-10">
              {[
                { icon: <ShieldCheck size={24}/>, t: "Only verified donors — no spam or fake requests." },
                { icon: <Navigation size={24}/>, t: "Smart matching based on location & urgency." },
                { icon: <Clock size={24}/>, t: "Real-time alerts before food expires." },
                { icon: <MapPin size={24}/>, t: "Full tracking from donation → delivery." },
                { icon: <PieChart size={24}/>, t: "Dashboard for analytics & impact reporting." }
              ].map((feat, i) => (
                 <div key={i} className="flex gap-5 items-start group">
                    <div className="w-12 h-12 rounded-[16px] bg-slate-800/50 border border-slate-700 flex items-center justify-center text-emerald-400 shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                      {feat.icon}
                    </div>
                    <span className="font-sans text-[16px] font-medium text-slate-300 leading-relaxed pt-1.5">{feat.t}</span>
                 </div>
              ))}
            </div>

            {/* TRUST INDICATORS */}
            <div className="grid grid-cols-2 gap-4 relative z-10 border-t border-slate-800 pt-8 mt-auto">
               <div>
                 <div className="font-serif text-[36px] text-white leading-[1] mb-2 tracking-tight">500+</div>
                 <div className="font-sans text-[12px] uppercase tracking-widest font-bold text-slate-500">Active NGOs</div>
               </div>
               <div>
                 <div className="font-serif text-[36px] text-primary leading-[1] mb-2 tracking-tight">10k+</div>
                 <div className="font-sans text-[12px] uppercase tracking-widest font-bold text-slate-500">Meals Redistributed</div>
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
