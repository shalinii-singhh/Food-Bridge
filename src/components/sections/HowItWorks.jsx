import { useState } from "react";
import { steps } from "../../data/steps";

// Purpose: Step-by-step how it works explanation.
// Modifiable: Step interaction behavior (hover vs scroll).
export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="max-w-[1300px] mx-auto py-28 px-6 md:px-12 relative z-10">
      <div className="grid md:grid-cols-[280px_1fr] gap-20 items-start">
        <div>
          <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-primary font-bold mb-5">The process</div>
          <h2 className="font-serif text-[46px] leading-[0.95] tracking-[-2px] font-normal text-textMain">
            Four<br />steps.<br />
            <em className="text-slate-300 not-italic italic">One hour.</em>
          </h2>
          <p className="font-sans text-[14px] text-textMuted mt-5 leading-relaxed">
            From your kitchen to someone's plate — fully tracked.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {steps.map((s, i) => (
            <div 
              key={i} 
              className={`rounded-3xl p-7 transition-all duration-500 cursor-default ${
                i === activeStep 
                  ? "bg-primary/5 border-primary/20 shadow-[0_8px_30px_rgba(22,163,74,0.06)]" 
                  : "bg-white border-border shadow-sm opacity-60 hover:opacity-100"
              } border`}
              onMouseEnter={() => setActiveStep(i)}
            >
              <div className="text-[32px] mb-4">{s.emoji}</div>
              <div className={`font-sans text-[11px] font-bold tracking-[0.15em] uppercase mb-2 ${
                i === activeStep ? "text-primary" : "text-slate-400"
              }`}>
                0{i + 1}
              </div>
              <div className="font-serif text-[24px] text-textMain mb-2 font-normal">{s.title}</div>
              <p className="font-sans text-[13px] text-textMuted leading-relaxed">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
